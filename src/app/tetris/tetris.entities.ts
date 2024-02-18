import { Matrix, RepresentedCell } from './tetris.interfaces';

export class Block {
  _x = 0;
  _y = 0;
  _size = 20;
  _fillColor: string;
  _borderColor: string;
  _borderWidth: number;
  constructor(
    x: number,
    y: number,
    fillColor = 'transparent',
    borderColor = 'white',
    size = 20,
    borderWidth = 1
  ) {
    this._x = x;
    this._y = y;
    this._fillColor = fillColor;
    this._borderColor = borderColor;
    this._borderWidth = borderWidth;
    this._size = size;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this._borderColor;
    ctx.fillRect(this._x, this._y, this._size, this._size);
    ctx.fillStyle = 'rgba(255, 255, 255,0.5)';
    let fillSize = this._size - this._borderWidth * 2;
    ctx.fillRect(
      this._x + this._borderWidth,
      this._y + this._borderWidth,
      fillSize,
      fillSize
    );
    ctx.fillStyle = this._fillColor;
    fillSize = this._size - this._borderWidth * 4;
    ctx.fillRect(
      this._x + this._borderWidth * 2,
      this._y + this._borderWidth * 2,
      fillSize,
      fillSize
    );
  }
}

export class Figure {
  _matrix: Matrix;
  _index: number;
  _toDraw = false;
  constructor(matrix: Matrix, index: number) {
    this._matrix = matrix;
    this._index = index;
  }
  forEachCells(callbackCell: (cell:RepresentedCell, x:number, y:number) => void) {
    this._matrix.forEach((row, x) => {
      this._matrix[x].forEach((column, y) => {
        callbackCell(this._matrix[x][y], x, y);
      });
    });
  }
  everyCells(callbackCell: (cell:RepresentedCell, x:number, y:number) => boolean):boolean {
    return this._matrix.every((row, x) => {
      return this._matrix[x].every((column, y) => {
        return callbackCell(this._matrix[x][y], x, y);
      });
    });
  }
  someCells(callbackCell: (cell:RepresentedCell, x:number, y:number) => boolean):boolean {
    return this._matrix.some((row, x) => {
      return this._matrix[x].some((column, y) => {
        return callbackCell(this._matrix[x][y], x, y);
      });
    });
  }
  mapCells(callbackCell: (cell:RepresentedCell, x:number, y:number) => RepresentedCell) {
    this.forEachCells((cell, x, y) => {this._matrix[x][y] = callbackCell(cell,x,y)});
  }

  setColor(color:string) {
    this.mapCells(cell => {
      cell.color = color;
      return cell
    });
  }
  markFigureToDraw() {
    this.mapCells(cell => {
      if(cell.y >= 0) cell.drawed = true;
      return cell
    });
  }
  getIsFigureReadyToMatrix() {
    return this.forEachCells(cell => cell.drawed);
  }
  markAllCellsToDraw() {
    this.mapCells(cell => {
      cell.drawed = true;
      return cell
    });
  }
  removeFigureInMatrix(matrix:Matrix, dx = 0, dy = 0) {
    this.forEachCells(cell => {
      if(cell.y >= 0) {
        const {x, y, active} = cell;
        if(active) {
          matrix[x + dx][y + dy].color = undefined;
          matrix[x + dx][y + dy].drawed = false;
        }
      }
    });
  }
  downOneLevel() {
    this.mapCells(cell => {cell.y++; return cell});
  }
  bothFiguresHaveSameActiveColumns(figure:Figure) {
    return figure.everyCells((cell, x, y) => {
      let originMatrixCell = this._matrix[x][y]
      return originMatrixCell.x == cell.x && originMatrixCell.active == cell.active;
    });
  }
  checkIfCanMove(x:number, matrix:Matrix) {
    return this.everyCells(cell => {
      let moveX = cell.x + x;
      let isCellOutOfBoard = moveX >= 0 && moveX < matrix.length && cell.y >= 0;
      const existBoardCell = !!matrix[moveX] && matrix[moveX][cell.y]?.drawed
      return isCellOutOfBoard && !existBoardCell
    });
  }
  hasSpaceInColumn(matrixBoard:Matrix, y: number) {
    return this._matrix.every(x => {
      const cell = x[y];
      return cell && !cell.active && !matrixBoard[cell.x][cell.y]?.drawed
    });
  }
  goRight(matrix: Matrix) {
    if(matrix && this.hasSpaceInColumn(matrix, this._matrix.length - 1)) {
      const recordedMatrix:Matrix = JSON.parse(JSON.stringify(this._matrix));
      recordedMatrix.forEach(row => {
        return row.forEach( cell => {
          cell.active = false;
          return cell
        })
      });
      this.forEachCells((cell, x, y) => {
        if(cell.active) {
          recordedMatrix[x][y + 1].active = true;
        }
      });
      this._matrix = recordedMatrix;
      // Revisar esta funcionalidad, no setea bien el true o el false al ir a la derecha
    } else if (this.checkIfCanMove(1, matrix)) {
      this.mapCells(cell => {
        cell.x++;
        return cell
      })
    }
  }
  goLeft(matrix: Matrix) {
    if(this.hasSpaceInColumn(matrix, 0)) {
      const recordedMatrix:Matrix = JSON.parse(JSON.stringify(this._matrix));
      recordedMatrix.forEach(row => {
        return row.forEach( cell => {
          cell.active = false;
          return cell
        })
      });
      this.forEachCells((cell, x, y) => {
        if(cell.active) {
          recordedMatrix[x][y - 1].active = true;
        }
      });
      this._matrix = recordedMatrix;
    } else if (this.checkIfCanMove(-1, matrix)) {
      this.mapCells(cell => {
        cell.x--;
        return cell
      })
    }
  }
  canDrawInMatrix(matrix: Matrix) {
    return !this.someCells((cell) => ((matrix[cell.x][cell.y]?.drawed || cell.y == matrix[0].length) && cell.active!))
  }
  cloneCells() {
    return JSON.parse(JSON.stringify(this._matrix));
  }
  rotate90() {
    const n = this._matrix.length;
    const recordedMatrix = (JSON.parse(JSON.stringify(this._matrix)) as Matrix);
    recordedMatrix.forEach(row => {
      return row.forEach(cell => {
        cell.active = false;
        return cell
      });
    });
    // now rotate 90 degrees
    this.forEachCells((cell, x, y) => {
      recordedMatrix[n - 1 - x][y].active = cell.active;
    });
    this._matrix = recordedMatrix;
  }
  rotate45(board:Matrix) {
    const n = this._matrix.length;
    const recordedMatrix = (JSON.parse(JSON.stringify(this._matrix)) as Matrix);
    recordedMatrix.forEach(row => {
      return row.forEach(cell => {
        cell.active = false;
        return cell
      });
    });
    let canRotate = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const active = this._matrix[n - j - 1][i].active; // clockwise
        // const active = this._matrix[j][n - i - 1].active; // counterclockwise
        if(active) {
          let {x, y} = recordedMatrix[i][j];
          recordedMatrix[i][j].active = active;
          if(board[x][y]?.drawed) {
            canRotate = false;
            break;
          };
        }
      }
    }
    if(canRotate) this._matrix = recordedMatrix;
  }

  static getRandomFigure(): Figure {
    const figures:Figure[] = [
      // L
      new Figure([
        [{x: 0, y: 0, active:true}, {x: 1, y: 0}, {x: 2, y: 0}],
        [{x: 0, y: 1, active:true}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 0, y: 2, active:true}, {x: 1, y: 2, active:true}, {x: 2, y: 2}],
      ], 0),
      // L (inverted)
      new Figure([
        [{x: 0, y: 0}, {x: 1, y: 0, active:true}, {x: 2, y: 0}],
        [{x: 0, y: 1}, {x: 1, y: 1, active:true}, {x: 2, y: 1}],
        [{x: 0, y: 2, active:true}, {x: 1, y: 2, active:true}, {x: 2, y: 2}],
      ], 1),
      // I
      new Figure([
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}],
        [{x: 0, y: 2, active:true}, {x: 1, y: 2, active:true}, {x: 2, y: 2, active:true}, {x: 3, y: 2, active:true}],
        [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}],
      ], 2),
      // T
      new Figure([
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
        [{x: 0, y: 1}, {x: 1, y: 1, active:true}, {x: 2, y: 1}],
        [{x: 0, y: 2, active:true}, {x: 1, y: 2, active:true}, {x: 2, y: 2, active:true}],
      ], 3),
      // Square
      new Figure([
        [{ x: 0, y: 0, active:true},{ x: 1, y: 0, active:true}],
        [{ x: 0, y: 1, active:true},{ x: 1, y: 1, active:true}],
      ], 4),
    ];
    const index = Math.floor(Math.random() * figures.length);
    const figure = figures[index];
    index == 0 ? figure.setColor('rgb(139, 50, 168)') :
    index == 1 ? figure.setColor('rgb(1, 105, 58)') :
    index == 2 ? figure.setColor('rgb(50, 85, 168)') :
    index == 3 ? figure.setColor('rgb(131, 121, 242)') :
    figure.setColor('rgb(179, 43, 43)');
    figure.mapCells(cell => {
      if(!cell.active) cell.active = false;
      // cell.drawed = false;
      return cell
    });
    return figure
  }
}
