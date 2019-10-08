import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroClassifierComponent } from './hero-classifier.component';

describe('HeroClassifierComponent', () => {
  let component: HeroClassifierComponent;
  let fixture: ComponentFixture<HeroClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
