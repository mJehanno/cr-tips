import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsDetailComponent } from './tips-detail.component';

describe('TipsDetailComponent', () => {
  let component: TipsDetailComponent;
  let fixture: ComponentFixture<TipsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
