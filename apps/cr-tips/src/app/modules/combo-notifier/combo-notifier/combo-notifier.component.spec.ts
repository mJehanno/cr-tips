import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboNotifierComponent } from './combo-notifier.component';

describe('ComboNotifierComponent', () => {
  let component: ComboNotifierComponent;
  let fixture: ComponentFixture<ComboNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
