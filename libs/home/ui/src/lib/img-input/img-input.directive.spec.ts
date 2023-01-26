import { TestBed } from '@angular/core/testing';
import ImgInputDirective from './img-input.directive';

xdescribe('ImgInputDirective', () => {
  let directive: ImgInputDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImgInputDirective],
    });

    directive = TestBed.inject(ImgInputDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
