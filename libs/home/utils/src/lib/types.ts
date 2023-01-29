export interface InputFormValue {
  tileset: string;
  gridCellSize: number;
}

export interface InputConfig {
  gridCellSize: number;
  img: HTMLImageElement;
}

export interface InputSelection {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface OutputSelection {
  x: number;
  y: number;
  w: number;
  h: number;
  offset: {
    x: number;
    y: number;
  };
}

export interface Selections {
  [id: string]: OutputSelection;
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
  selection: OutputSelection;
}
