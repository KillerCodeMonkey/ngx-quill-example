import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatTextComponent } from './format-text.component';

describe('FormatTextComponent', () => {
  let component: FormatTextComponent;
  let fixture: ComponentFixture<FormatTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
