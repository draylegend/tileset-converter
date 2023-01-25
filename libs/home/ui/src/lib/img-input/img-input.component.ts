import { ChangeDetectionStrategy, Component } from '@angular/core';
import ImgInputDirective from './img-input.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-img-input',
  standalone: true,
  styleUrls: ['./img-input.component.scss'],
  templateUrl: './img-input.component.html',
  imports: [ImgInputDirective],
})
export class ImgInputComponent {}
