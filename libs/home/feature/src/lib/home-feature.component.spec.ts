import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeatureComponent } from './home-feature.component';

describe('HomeFeatureComponent', () => {
  let fixture: ComponentFixture<HomeFeatureComponent>;
  let component: HomeFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeFeatureComponent],
    });

    fixture = TestBed.createComponent(HomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
