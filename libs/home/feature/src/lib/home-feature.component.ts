import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushModule } from '@rx-angular/template/push';
import { HomeService } from '@tileset-converter/home/domain';
import {
  ImgInputComponent,
  ImgOutputComponent,
} from '@tileset-converter/home/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./home-feature.component.scss'],
  templateUrl: './home-feature.component.html',
  imports: [ImgInputComponent, ImgOutputComponent, PushModule],
})
export default class HomeFeatureComponent {
  constructor(public service: HomeService) {}
}
