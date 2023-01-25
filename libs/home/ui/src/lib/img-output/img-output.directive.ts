import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[output]',
  standalone: true,
})
export default class ImgOutputDirective {}
