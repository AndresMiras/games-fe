import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Matrix, RepresentedCell } from './tetris.interfaces';
import { Block, Figure } from './tetris.entities';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faCirclePlay, faPauseCircle, faPowerOff, faRotateRight, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Howl } from 'howler';
import { StarBackgroundComponent } from '../shared/components/star-background/star-background.component';

@Component({
  selector: 'tetris-game',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, StarBackgroundComponent],
  templateUrl: './tetris.component.html',
  styleUrl: './tetris.component.scss'
})
export class TetrisComponent implements OnDestroy, AfterViewInit {
  @ViewChild('board', { static: true }) _canvasBoard!: ElementRef<HTMLCanvasElement>;
  @ViewChild('next_figure', { static: true }) _canvasNextFigure!: ElementRef<HTMLCanvasElement>;
  get canvasBoard() {return this._canvasBoard.nativeElement};
  get canvasNextFigure() {return this._canvasNextFigure.nativeElement};
  private _boardCTX!: CanvasRenderingContext2D;
  private _nextFigureCTX!: CanvasRenderingContext2D;
  private _rows = 20;
  private _rowsNextFigure = 6;
  private _columns = 10;
  private _columnsNextFigure = 6;
  private _blockSize = 30 // size of block in pixels
  private _blockSizeNextFigure = 20 // size of block in pixels
  private _canvasBoardWidth = 0;
  private _canvasBoardHeight = 0;
  private _canvasNextFigureWidth = 0;
  private _canvasNextFigureHeight = 0;
  private _boardInterval!: NodeJS.Timeout;
  private _timer = 420;
  private _timerGoDown = 0;
  private _figure!: Figure;
  private _nextFigure!: Figure;
  private _figureCloned!: Figure;
  private _boardM: Matrix = [];
  private _nextFigureM: Matrix = [];
  private _tetrisSongTheme!: Howl;
  _isTetrisSongPlaying = false;
  _endGame = false;
  level = 0;
  lines = 0;
  score = 0;

  // constrol icons
  faCirclePlay = faCirclePlay;
  faRotateRight = faRotateRight;
  faPauseCircle = faPauseCircle;
  // pad
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faVolumeHigh = faVolumeHigh
  faVolumeMute = faVolumeMute

  constructor(private renderer: Renderer2) {
    this.initFigures();
  }

  initSongTheme() {
    this._tetrisSongTheme = new Howl({
      src: ['/assets/songs/tetris_song_short_theme.mp3'],
      loop: true
    });
  }

  initFigures() {
    this._figure = Figure.getRandomFigure();
    this.mapCurrentFigureToCenterBoard();
    this._nextFigure = Figure.getRandomFigure();
    this.mapNextFigureToCenterBoard();
  }

  ngAfterViewInit(): void {
    this._nextFigureCTX = this.canvasNextFigure.getContext('2d')!;
    this.setDefaultNextFigureCanvasSize();
    this.defineMatrix(this._nextFigureM, this._blockSizeNextFigure, this._canvasNextFigureWidth, this._canvasNextFigureHeight);
    this.addFigureToMatrix(this._nextFigure, this._nextFigureM);
    this.drawMatrix(this._nextFigureM, this._nextFigureCTX, this._blockSizeNextFigure);

    /*__________________________________________________________________________________________________________________________________ */
    this._boardCTX = this.canvasBoard.getContext('2d')!;
    this.setDefaultBoardSize();
    this.defineMatrix(this._boardM);
    // this.startIntervalUpdate();
    this.enableMobileControls();
    this.initSongTheme();
  }

  startIntervalUpdate(time = this._timer) {
    this._boardInterval = setInterval(() => {
      try {
        this.update();
      } catch ( e) {
        console.error(e);
        clearInterval(this._boardInterval);
        clearInterval(this._timer);
      }
    }, time);
  }

  update() {
    // Clean canvas work space.
    this._boardCTX.clearRect(0, 0, this.canvasBoard.width, this.canvasBoard.height);
    this.setDefaultFrameStyles();
    this.addFigureToMatrix();
    this.drawMatrix();
    this.figureDownLevel();
    this.checkRows();
  }

  setDefaultBoardSize() {
    this._canvasBoardWidth = this._columns * this._blockSize;
    this._canvasBoardHeight = this._rows * this._blockSize;
    this.canvasBoard.width = this._canvasBoardWidth;
    this.canvasBoard.height = this._canvasBoardHeight;
  }

  setDefaultNextFigureCanvasSize() {
    this._canvasNextFigureWidth = this._columnsNextFigure * this._blockSizeNextFigure;
    this._canvasNextFigureHeight = this._rowsNextFigure * this._blockSizeNextFigure;
    this.canvasNextFigure.width = this._canvasNextFigureWidth;
    this.canvasNextFigure.height = this._canvasNextFigureHeight;
  }

  forEachRows(callback: (y:number, rowN:number) => void, blockSize = this._blockSize, matrixHeight = this._canvasBoardHeight) {
    for (let y = 0, rowN = 0; y < matrixHeight; y += blockSize, rowN++) {
      callback(y, rowN);
    }
  }

  forEachColumns(callback: (x:number, columnN:number) => void, blockSize = this._blockSize, matrixWidth = this._canvasBoardWidth) {
    for (let x = 0, columnN = 0; x < matrixWidth; x += blockSize, columnN++) {
      callback(x, columnN);
    }
  }

  defineMatrix(matrix:Matrix, blockSize = this._blockSize, matrixWidth = this._canvasBoardWidth, matrixHeight = this._canvasBoardHeight) {
    this.forEachColumns((x, column) => {
      matrix.push([]);
      this.forEachRows((y, row) => {
        matrix[column][row] = {x,y, drawed: false};
      }, blockSize, matrixHeight);
    }, blockSize, matrixWidth);
  }

  setDefaultFrameStyles() {
    this._boardCTX.fillStyle = 'rgba(170, 175, 125, 0.2)';
    this._boardCTX.fillRect(0,0, this.canvasBoard.width, this.canvasBoard.height);
    this._boardCTX.strokeStyle = 'rgba(55, 55, 55, .8)'; // color of board
    this._boardCTX.lineWidth = .5; // Width of lines
    // draw column lines
    this.forEachColumns(colum => {
      if(colum != 0 && colum != this._columns) {
        this._boardCTX.beginPath();
        this._boardCTX.moveTo(colum, 0);
        this._boardCTX.lineTo(colum, this._canvasBoardHeight); // Draw to end point
        this._boardCTX.stroke(); // Draw line
      }
    });
    this.forEachRows(row => {
      if(row != 0 && row != this._rows) {
        this._boardCTX.beginPath();
        this._boardCTX.moveTo(0, row);
        this._boardCTX.lineTo(this._canvasBoardHeight, row);
        this._boardCTX.lineWidth = .5;
        this._boardCTX.stroke();
      }
    });
  }

  addFigureToMatrix(figure = this._figure, matrix = this._boardM) {
    figure.forEachCells(cell => {
      if(cell.y >= 0) {
        const {x, y, color, active, drawed} = cell;
        if(active) {
          matrix[x][y].color = color;
          matrix[x][y].active = active;
          matrix[x][y].drawed = drawed;
        }
      }
    })
  }

  drawMatrix(matrix = this._boardM,ctx = this._boardCTX, blockSize = this._blockSize) {
    matrix.forEach(cells => {
      cells.forEach(cell => {
        const {x,y, color, active, drawed} = cell;
        if(drawed || active) {
          const block = new Block(x, y, color, 'transparent', blockSize);
          block.draw(ctx);
        }
      });
    });
  }

  // Figure methods

  removeFigureInMatrix() {
    this._figure.forEachCells(cell => {
      if(cell.y >= 0) {
        const {x, y, active} = cell;
        if(active) {
          this._boardM[x][y].color = undefined;
          this._boardM[x][y].active = false;
          this._boardM[x][y].drawed = false;
        }
      }
    });
  }

  isEndGame() {
    return this._boardM.some(cell => cell[0].drawed);
  }

  cleanFigureNextBoard() {

  }

  mapCurrentFigureToCenterBoard() {
    const {_index} = this._figure;
    this._figure.mapCells(cell => {
      cell.x += _index == 2 || _index == 3 ? 3 : 4;
      cell.y += _index == 2 || _index == -3 ? -3 : -4;
      return cell;
    });
  }
  mapNextFigureToCenterBoard() {
    const {_index} = this._nextFigure;
    this._nextFigure.mapCells(cell => {
      cell.x += _index != 2  ? 2 : 1;
      cell.y += _index != 2 && _index != 3 ? 2 : 1;
      return cell;
    });
  }
  mapNextFigureToDefault() {
    const {_index} = this._nextFigure;
    this._nextFigure.mapCells(cell => {
      cell.x += _index != 2  ? -2 : -1;
      cell.y += _index != 2 && _index != 3  ? -2 : -1;
      return cell;
    });
  }

  figureDownLevel() {
    const nextFigureDropOneRow = new Figure(this._figure.cloneCells(), this._figure._index);
    nextFigureDropOneRow.mapCells(cell => {cell.y++; return cell});
    // Check if the cell is over drawed matrix
    const canDrawNextFigureDrop = nextFigureDropOneRow.canDrawInMatrix(this._boardM);

    if(this._endGame) {
      clearInterval(this._boardInterval);
    } else if(this._figure._toDraw) {
        if(this._figure.bothFiguresHaveSameActiveColumns(this._figureCloned)) {
          this._figure.mapCells(cell => {
            const {x, y, active} = cell;
            if(y >= 0 && active) {
              this._boardM[x][y].drawed = true;
              this._boardM[x][y].active = false;
              cell.active = false;
            }
            if(y == 0) {
              this._endGame = true;
            }
            return cell
          });
          this.mapNextFigureToDefault();
          this._figure = new Figure(this._nextFigure.cloneCells(), this._nextFigure._index);
          this.mapCurrentFigureToCenterBoard();
          this.addFigureToMatrix();

          this._nextFigure = Figure.getRandomFigure();
          this.mapNextFigureToCenterBoard();
          this.defineMatrix(this._nextFigureM, this._blockSizeNextFigure, this._canvasNextFigureWidth, this._canvasNextFigureHeight);
          this._nextFigureCTX.clearRect(0, 0, this.canvasNextFigure.width, this.canvasNextFigure.height);
          this.addFigureToMatrix(this._nextFigure, this._nextFigureM);
          this.drawMatrix(this._nextFigureM, this._nextFigureCTX, this._blockSizeNextFigure);
        } else {
          this._figure._toDraw = false;
          this.removeFigureInMatrix();
        }
      } else if(!canDrawNextFigureDrop) {
        this._figureCloned = nextFigureDropOneRow;
        this.removeFigureInMatrix();
        this._figure._toDraw = true;
      } else {
        this.removeFigureInMatrix();
        this._figure.downOneLevel();
      }
  }

  checkRows() {
    const rowsToDelete:number[] = [];
    const reformatedMatrix:Matrix = JSON.parse(JSON.stringify(this._boardM));
    for (let y = 0; y < this._boardM[0].length; y++) {
      if(this._boardM.every(row => row[y].drawed)) {
        rowsToDelete.push(y);
        for (let x = 0; x < this._boardM.length; x++) {
          this._boardM[x][y].color = 'white';
          reformatedMatrix[x].splice(y, 1);
          reformatedMatrix[x].unshift({} as any);
        }
      }
    }

    if(rowsToDelete.length > 0) {
      this.drawMatrix();
      let score = rowsToDelete.length;
      for (let y = this._boardM[0].length - 1; y >= 0; y--) {
        for (let x = this._boardM.length - 1; x >= 0; x--) {
          this._boardM[x][y].drawed = reformatedMatrix[x][y]?.drawed;
          this._boardM[x][y].color = reformatedMatrix[x][y]?.color;
        }
      }
      this.setScore(score);
    }
  }

  setScore(deletedRows: number) {
    this.lines += deletedRows;
    this.score += deletedRows * 100;
    this.level = Number((this.score / ((this._rows / 4) * 100)).toFixed(0));
    this._timer = this._timer - (this.level > 0 ? 2 : 0);

    clearInterval(this._boardInterval);
    this.startIntervalUpdate(this._timer);
  }

  async onClickRotate() {
    // this._figure.rotate90();
    this._figure.rotate45(this._boardM);
    this.drawMatrix();
  }

  async onClickGoRight() {
    this._figure.goRight(this._boardM);
    this.drawMatrix();
  }

  async onClickGoLeft() {
    this._figure.goLeft(this._boardM);
    this.drawMatrix();
  }

  onMouseDownGoDown() {
    const timerToMove = 20;
    if(this._timerGoDown != timerToMove) {
      clearInterval(this._boardInterval);
      this._timerGoDown = timerToMove;
      this.startIntervalUpdate(this._timerGoDown);
    }
  }

  onMouseUpStopGoDown() {
    clearInterval(this._boardInterval);
    this._timerGoDown = this._timer;
    this.startIntervalUpdate(this._timer);
  }

  @HostListener('document:keydown', ['$event'])
  async onKeyboardKeyDown(event: KeyboardEvent) {
    const {code} = event;
    if (code === 'ArrowRight') {
      this.onClickGoRight();
    } if (code === 'ArrowLeft') {
      this.onClickGoLeft();
    } if (code === 'ArrowDown') {
      this.onMouseDownGoDown();
    } if(code === 'Space' || code === 'Enter') {
      this.onClickRotate();
    }
  }


  @HostListener('document:keyup', ['$event'])
  onKeyboardKeyUp(event: KeyboardEvent) {
    const {code} = event;
    if (code === 'ArrowDown') {
      this.onMouseUpStopGoDown();
    }
  }

  forEachCellsOfMatrix(callbackCells: (cell:RepresentedCell) => void) {
    this._boardM.forEach(cells => {
      cells.forEach(cell => {
        callbackCells(cell)
      });
    });
  }

  onClickInitGame() {
    if(this._boardInterval) clearInterval(this._boardInterval);
    if(this._timer) clearInterval(this._timer);
    this.startIntervalUpdate();
  }

  onClickStopGame() {
    clearInterval(this._boardInterval);
  }

  onClickResetGame() {
    clearInterval(this._boardInterval);
    clearInterval(this._timer);
    this._endGame = false;
    this.level = 0;
    this.score = 0;
    this.lines = 0;
    this._boardM = [];
    this.defineMatrix(this._boardM);
    this.initFigures();
    this.startIntervalUpdate();
  }

  enableMobileControls() {
    const element = document.getElementById("btn-down") as HTMLButtonElement;

    this.renderer.listen(element, 'touchstart', (event) => {
      this.onMouseDownGoDown();
    });

    this.renderer.listen(element, 'touchend', (event) => {
      this.onMouseUpStopGoDown();
    });
  }

  playStopTetrisTheme() {
    if(this._isTetrisSongPlaying) {
      this._tetrisSongTheme.play();
    } else {
      this._tetrisSongTheme.pause();
    }
  }

  playTetrisTheme() {
    this._isTetrisSongPlaying = !this._isTetrisSongPlaying;
    this.playStopTetrisTheme();
  }

  ngOnDestroy(): void {
    clearInterval(this._boardInterval);
  }
}
