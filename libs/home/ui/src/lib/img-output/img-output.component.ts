import { ChangeDetectionStrategy, Component } from '@angular/core';
import ImgOutputDirective from './img-output.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-img-output',
  standalone: true,
  styleUrls: ['./img-output.component.scss'],
  templateUrl: './img-output.component.html',
  imports: [ImgOutputDirective],
})
export class ImgOutputComponent {}
