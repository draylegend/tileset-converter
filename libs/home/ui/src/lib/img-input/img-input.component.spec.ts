import { ComponentFixture, TestBed } from '@angular/core/testing';
import ImgInputComponent from './img-input.component';

describe('ImgInputComponent', () => {
  let fixture: ComponentFixture<ImgInputComponent>;
  let component: ImgInputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImgInputComponent],
    });

    fixture = TestBed.createComponent(ImgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
