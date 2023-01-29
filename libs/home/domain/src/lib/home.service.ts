import { Injectable } from '@angular/core';
import { InputConfig, Selection } from '@tileset-converter/home/utils';
import { Subject } from 'rxjs';

@Injectable()
export class HomeService {
  inputConfig = new Subject<InputConfig>();
  selection = new Subject<Selection>();
}
