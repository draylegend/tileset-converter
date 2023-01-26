import { Injectable } from '@angular/core';
import { InputConfig } from '@tileset-converter/home/utils';
import { Subject } from 'rxjs';

@Injectable()
export class HomeService {
  inputConfig = new Subject<InputConfig>();
}
