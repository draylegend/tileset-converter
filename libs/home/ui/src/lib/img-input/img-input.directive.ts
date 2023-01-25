import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[input]',
  standalone: true,
})
export default class ImgInputDirective {}
