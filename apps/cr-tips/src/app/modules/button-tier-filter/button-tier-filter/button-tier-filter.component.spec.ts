import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTierFilterComponent } from './button-tier-filter.component';

describe('ButtonTierFilterComponent', () => {
  let component: ButtonTierFilterComponent;
  let fixture: ComponentFixture<ButtonTierFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTierFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTierFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
