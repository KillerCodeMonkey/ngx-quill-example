import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatObjectComponent } from './format-object.component';

describe('FormatObjectComponent', () => {
  let component: FormatObjectComponent;
  let fixture: ComponentFixture<FormatObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
