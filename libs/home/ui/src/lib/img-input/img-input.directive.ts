import { Directive, ElementRef, Input } from '@angular/core';
import { InputConfig } from '@tileset-converter/home/utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[input][config]',
  standalone: true,
})
export default class ImgInputDirective {
  #config!: InputConfig;
  #canvas = this.ref.nativeElement;
  #ctx: CanvasRenderingContext2D;
  #animationId = 0;

  constructor(private ref: ElementRef<HTMLCanvasElement>) {
    console.log(JSON.stringify(ref.nativeElement?.getContext));
    const ctx = this.#canvas.getContext('2d');

    if (!ctx) throw Error('Provide input canvas!');

    this.#ctx = ctx;
  }

  @Input()
  set config(config: InputConfig) {
    this.#config = config;
    this.#canvas.width = config.img.width;
    this.#canvas.height = config.img.height;

    this.#animate();
  }

  #animate = () => {
    this.#ctx.drawImage(this.#config.img, 0, 0);

    this.#animationId = requestAnimationFrame(this.#animate);
  };
}
