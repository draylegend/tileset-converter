import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ImgInputDirective from './img-input.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-img-input',
  standalone: true,
  styleUrls: ['./img-input.component.scss'],
  templateUrl: './img-input.component.html',
  imports: [ImgInputDirective, FormsModule],
})
export class ImgInputComponent {
  submit(e: { tilesetPath: string; gridCellSize: number }) {
    console.log(e);
  }
}
