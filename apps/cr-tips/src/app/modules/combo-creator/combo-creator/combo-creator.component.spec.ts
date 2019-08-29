import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCreatorComponent } from './combo-creator.component';

describe('ComboCreatorComponent', () => {
  let component: ComboCreatorComponent;
  let fixture: ComponentFixture<ComboCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
