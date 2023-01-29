import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IfModule } from '@rx-angular/template/if';
import { MergedConfig, OutputConfig } from '@tileset-converter/home/utils';
import { Subject } from 'rxjs';
import ImgOutputDirective from './img-output.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-img-output[mergedConfig]',
  standalone: true,
  styleUrls: ['./img-output.component.scss'],
  templateUrl: './img-output.component.html',
  imports: [ImgOutputDirective, FormsModule, IfModule],
})
export class ImgOutputComponent {
  @Input()
  mergedConfig!: MergedConfig;

  @Output()
  configChange = new Subject<OutputConfig>();
}
