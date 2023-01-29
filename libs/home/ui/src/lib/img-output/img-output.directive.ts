import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { fromEvent } from '@rx-angular/cdk/zone-less/rxjs';
import { MergedConfig, Selections } from '@tileset-converter/home/utils';
import { filter, Subject, takeUntil } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[output][config]',
  standalone: true,
})
export default class ImgOutputDirective implements OnDestroy {
  #canvas = this.ref.nativeElement;
  #ctx: CanvasRenderingContext2D;
  #config!: MergedConfig;
  #animationId = 0;
  #selections: Selections = {};
  #selection?: { x: number; y: number };
  #destroy = new Subject<void>();
  #canSelect = true;

  constructor(private ref: ElementRef<HTMLCanvasElement>) {
    const ctx = this.#canvas.getContext('2d');

    if (!ctx) throw Error('Provide output canvas!');

    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = 'high';
    this.#ctx = ctx;

    const click$ = fromEvent<MouseEvent>(this.#canvas, 'click');

    fromEvent<MouseEvent>(this.#canvas, 'mousemove')
      .pipe(
        takeUntil(this.#destroy),
        filter(() => this.#canSelect),
      )
      .subscribe(r => {
        this.#selection = {
          x: Math.trunc(r.offsetX / this.#config.outputGridCellSize),
          y: Math.trunc(r.offsetY / this.#config.outputGridCellSize),
        };
      });

    click$.pipe(takeUntil(this.#destroy)).subscribe(e => {
      const { x, y, w, h } = this.#config.selection;
      const offset = {
        x: Math.trunc(e.offsetX / this.#config.outputGridCellSize),
        y: Math.trunc(e.offsetY / this.#config.outputGridCellSize),
      };

      this.#selections[`${x}${y}${w}${h}`] = { x, y, w, h, offset };
      this.#selection = undefined;
      this.#canSelect = false;
    });
  }

  @Input()
  set config(config: MergedConfig) {
    this.#config = config;
    this.#canvas.width = config.width * config.outputGridCellSize;
    this.#canvas.height = config.height * config.outputGridCellSize;
    this.#canSelect = true;

    this.#animate();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.#animationId);
    this.#destroy.next();
    this.#destroy.complete();
  }

  #animate = () => {
    const { inputGridCellSize, outputGridCellSize, selection } = this.#config;

    this.#canvas.width |= 0;

    this.#selection &&
      this.#ctx.drawImage(
        this.#config.img,
        selection.x * inputGridCellSize,
        selection.y * inputGridCellSize,
        selection.w * inputGridCellSize,
        selection.h * inputGridCellSize,
        this.#selection.x * outputGridCellSize,
        this.#selection.y * outputGridCellSize,
        selection.w * outputGridCellSize,
        selection.h * outputGridCellSize,
      );

    for (const id in this.#selections) {
      const s = this.#selections[id];

      this.#ctx.drawImage(
        this.#config.img,
        s.x * inputGridCellSize,
        s.y * inputGridCellSize,
        s.w * inputGridCellSize,
        s.h * inputGridCellSize,
        s.offset.x * outputGridCellSize,
        s.offset.y * outputGridCellSize,
        s.w * outputGridCellSize,
        s.h * outputGridCellSize,
      );
    }

    this.#animationId = requestAnimationFrame(this.#animate);
  };
}
