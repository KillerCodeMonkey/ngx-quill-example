import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatJsonComponent } from './format-json.component';

describe('FormatJsonComponent', () => {
  let component: FormatJsonComponent;
  let fixture: ComponentFixture<FormatJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
