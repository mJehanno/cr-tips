import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPictureComponent } from './combo-picture.component';

describe('ComboPictureComponent', () => {
  let component: ComboPictureComponent;
  let fixture: ComponentFixture<ComboPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
