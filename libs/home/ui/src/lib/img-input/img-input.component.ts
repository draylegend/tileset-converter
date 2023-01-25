import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tileset-converter-img-input',
  standalone: true,
  styleUrls: ['./img-input.component.scss'],
  templateUrl: './img-input.component.html',
})
export default class ImgInputComponent {}
