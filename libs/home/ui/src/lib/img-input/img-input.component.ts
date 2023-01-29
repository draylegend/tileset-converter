import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IfModule } from '@rx-angular/template/if';
import {
  createImg,
  InputConfig,
  InputFormValue,
  readFile,
  Selection,
} from '@tileset-converter/home/utils';
import { map, Observable, ReplaySubject, Subject, switchMap } from 'rxjs';
import ImgInputDirective from './img-input.directive';

interface MergedFormValue {
  file: File;
  gridCellSize: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-img-input',
  standalone: true,
  styleUrls: ['./img-input.component.scss'],
  templateUrl: './img-input.component.html',
  imports: [ImgInputDirective, FormsModule, IfModule],
})
export class ImgInputComponent {
  form = new ReplaySubject<MergedFormValue>();
  @Output()
  configChange: Observable<InputConfig> = this.form.pipe(
    switchMap(({ file, gridCellSize }) =>
      readFile(file).pipe(
        switchMap(blob => createImg(blob)),
        map(img => ({ gridCellSize, img })),
      ),
    ),
  );
  @Output()
  selectionChange = new Subject<Selection>();

  submit({ gridCellSize }: InputFormValue, file: File) {
    this.form.next({ file, gridCellSize });
  }
}
