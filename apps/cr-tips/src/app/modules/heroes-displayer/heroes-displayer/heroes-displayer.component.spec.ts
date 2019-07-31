import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDisplayerComponent } from './heroes-displayer.component';

describe('HeroesDisplayerComponent', () => {
  let component: HeroesDisplayerComponent;
  let fixture: ComponentFixture<HeroesDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
