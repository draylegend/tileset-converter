import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgOutputComponent } from './img-output.component';

describe('ImgOutputComponent', () => {
  let fixture: ComponentFixture<ImgOutputComponent>;
  let component: ImgOutputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImgOutputComponent],
    });

    fixture = TestBed.createComponent(ImgOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
