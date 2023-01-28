import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeService } from '@tileset-converter/home/domain';
import HomeFeatureComponent from './home-feature.component';

describe('HomeFeatureComponent', () => {
  let fixture: ComponentFixture<HomeFeatureComponent>;
  let component: HomeFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeFeatureComponent],
      providers: [HomeService],
    });

    fixture = TestBed.createComponent(HomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
