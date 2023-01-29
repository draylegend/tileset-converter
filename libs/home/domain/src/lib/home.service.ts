import { Injectable } from '@angular/core';
import {
  InputConfig,
  MergedConfig,
  OutputConfig,
  Selection,
} from '@tileset-converter/home/utils';
import { map, merge, Observable, scan, Subject } from 'rxjs';

const START_WITH: MergedConfig = {
  img: new Image(),
  inputGridCellSize: 0,
  outputGridCellSize: 0,
  width: 0,
  height: 0,
  selection: { x: 0, y: 0, w: 0, h: 0 },
};

@Injectable()
export class HomeService {
  inputConfig = new Subject<InputConfig>();
  selection = new Subject<Selection>();
  outputConfig = new Subject<OutputConfig>();
  mergedConfig$: Observable<MergedConfig> = merge(
    this.inputConfig.pipe(
      map(c => ({
        img: c.img,
        inputGridCellSize: c.gridCellSize,
      })),
    ),
    this.outputConfig.pipe(
      map(c => ({
        outputGridCellSize: c.gridCellSize,
        width: c.width,
        height: c.height,
      })),
    ),
    this.selection.pipe(map(selection => ({ selection }))),
  ).pipe(scan((prev, curr) => ({ ...prev, ...curr }), START_WITH));
}
