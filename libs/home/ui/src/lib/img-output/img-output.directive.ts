import { Directive, Input } from '@angular/core';
import { MergedConfig } from '@tileset-converter/home/utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[output][config]',
  standalone: true,
})
export default class ImgOutputDirective {
  @Input()
  set config(config: MergedConfig) {
    console.log(config);
  }
}
