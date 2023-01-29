import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IfModule } from '@rx-angular/template/if';
import { PushModule } from '@rx-angular/template/push';
import { HomeService } from '@tileset-converter/home/domain';
import {
  ImgInputComponent,
  ImgOutputComponent,
} from '@tileset-converter/home/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './home-feature.component.html',
  imports: [ImgInputComponent, ImgOutputComponent, PushModule, IfModule],
})
export default class HomeFeatureComponent {
  constructor(public service: HomeService) {}
}
