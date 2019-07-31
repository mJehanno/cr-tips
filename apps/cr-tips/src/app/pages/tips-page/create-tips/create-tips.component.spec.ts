import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipsComponent } from './create-tips.component';

describe('CreateTipsComponent', () => {
  let component: CreateTipsComponent;
  let fixture: ComponentFixture<CreateTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
