import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./home-feature.component.scss'],
  templateUrl: './home-feature.component.html',
})
export default class HomeFeatureComponent {}
