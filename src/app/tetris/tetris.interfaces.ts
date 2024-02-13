interface Cell {
  x: number;
  y: number;
}

export interface RepresentedCell extends Cell {
  active?: boolean;
  drawed?: boolean;
  color?: string;
}

export type Matrix = RepresentedCell[][];
