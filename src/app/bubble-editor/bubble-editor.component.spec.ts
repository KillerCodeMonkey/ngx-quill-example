import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditorComponent } from './bubble-editor.component';

describe('BubbleEditorComponent', () => {
  let component: BubbleEditorComponent;
  let fixture: ComponentFixture<BubbleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
