import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ImgInputComponent,
  ImgOutputComponent,
} from '@tileset-converter/home/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./home-feature.component.scss'],
  templateUrl: './home-feature.component.html',
  imports: [ImgInputComponent, ImgOutputComponent],
})
export default class HomeFeatureComponent {}
