import { Observable } from 'rxjs';

export const createImg = (blob: string, img = new Image()) =>
  new Observable<HTMLImageElement>(subscriber => {
    img.onload = () => subscriber.next(img);
    img.src = blob;
  });
