export interface InputFormValue {
  tileset: string;
  gridCellSize: number;
}

export interface InputConfig {
  gridCellSize: number;
  img: HTMLImageElement;
}

export interface Selection {
  x: number;
  y: number;
  w: number;
  h: number;
}
