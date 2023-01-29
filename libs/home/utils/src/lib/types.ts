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

export interface OutputConfig {
  gridCellSize: number;
  width: number;
  height: number;
}

export interface MergedConfig {
  img: HTMLImageElement;
  inputGridCellSize: number;
  outputGridCellSize: number;
  width: number;
  height: number;
  selection: Selection;
}
