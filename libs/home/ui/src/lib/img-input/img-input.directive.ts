import { Directive, ElementRef, Input, Output } from '@angular/core';
import { InputConfig, Selection } from '@tileset-converter/home/utils';
import {
  fromEvent,
  map,
  pipe,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[input][config]',
  standalone: true,
})
export default class ImgInputDirective {
  #config!: InputConfig;
  #canvas = this.ref.nativeElement;
  #selection: Selection = { x: 0, y: 0, w: 0, h: 0 };
  #mouseUp = fromEvent(this.#canvas, 'mouseup');
  @Output()
  selectionChange = this.#mouseUp.pipe(
    withLatestFrom(
      fromEvent<MouseEvent>(this.#canvas, 'mousedown').pipe(
        switchMap(start =>
          fromEvent<MouseEvent>(this.#canvas, 'mousemove').pipe(
            takeUntil(this.#mouseUp),
            this.#createSelection(start),
          ),
        ),
        tap(selection => (this.#selection = selection)),
      ),
      (_, v) => v,
    ),
  );
  #ctx: CanvasRenderingContext2D;
  #animationId = 0;

  constructor(private ref: ElementRef<HTMLCanvasElement>) {
    const ctx = this.#canvas.getContext('2d');

    if (!ctx) throw Error('Provide input canvas!');

    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = 'high';
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
    this.#canvas.width |= 0;

    this.#ctx.drawImage(this.#config.img, 0, 0);

    const { x, y, w, h } = this.#selection;
    this.#ctx.fillStyle = 'rgba(255,0,0,0.3)';
    this.#ctx.fillRect(
      x * this.#config.gridCellSize,
      y * this.#config.gridCellSize,
      w * this.#config.gridCellSize,
      h * this.#config.gridCellSize,
    );

    this.#animationId = requestAnimationFrame(this.#animate);
  };

  #createSelection(start: MouseEvent) {
    return pipe(
      map<MouseEvent, Selection>(end => {
        const x = Math.trunc(start.offsetX / this.#config.gridCellSize);
        const y = Math.trunc(start.offsetY / this.#config.gridCellSize);
        const w = Math.trunc(end.offsetX / this.#config.gridCellSize);
        const h = Math.trunc(end.offsetY / this.#config.gridCellSize);

        return { x, y, w: w - x + 1, h: h - y + 1 };
      }),
    );
  }
}
