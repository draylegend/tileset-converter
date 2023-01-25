import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tileset-converter-img-output',
  standalone: true,
  styleUrls: ['./img-output.component.scss'],
  templateUrl: './img-output.component.html',
})
export class ImgOutputComponent {}
