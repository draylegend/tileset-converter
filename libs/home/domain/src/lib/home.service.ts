import { Injectable } from '@angular/core';
import {
  InputConfig,
  InputSelection,
  MergedConfig,
  OutputConfig,
} from '@tileset-converter/home/utils';
import { map, merge, Observable, scan, Subject } from 'rxjs';

const START_WITH: MergedConfig = {
  img: new Image(),
  inputGridCellSize: 0,
  outputGridCellSize: 0,
  width: 0,
  height: 0,
  selection: { x: 0, y: 0, w: 0, h: 0, offset: { x: 0, y: 0 } },
};

@Injectable()
export class HomeService {
  inputConfig = new Subject<InputConfig>();
  selection = new Subject<InputSelection>();
  outputConfig = new Subject<OutputConfig>();
  mergedConfig$: Observable<MergedConfig> = merge(
    this.inputConfig.pipe(
      map<InputConfig, Partial<MergedConfig>>(c => ({
        img: c.img,
        inputGridCellSize: c.gridCellSize,
      })),
    ),
    this.outputConfig.pipe(
      map<OutputConfig, Partial<MergedConfig>>(c => ({
        outputGridCellSize: c.gridCellSize,
        width: c.width,
        height: c.height,
      })),
    ),
    this.selection.pipe(
      map<InputSelection, Partial<MergedConfig>>(selection => ({
        selection: {
          ...selection,
          offset: { x: 0, y: 0 },
        },
      })),
    ),
  ).pipe(scan((prev, curr) => ({ ...prev, ...curr }), START_WITH));
}
