import { Observable } from 'rxjs';

export const readFile = (file: File, reader = new FileReader()) =>
  new Observable<string>(subscriber => {
    reader.onload = ({ target }) =>
      typeof target?.result === 'string' && subscriber.next(target.result);

    reader.readAsDataURL(file);
  });
