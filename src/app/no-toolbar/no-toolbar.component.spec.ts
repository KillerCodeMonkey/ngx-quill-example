import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoToolbarComponent } from './no-toolbar.component';

describe('NoToolbarComponent', () => {
  let component: NoToolbarComponent;
  let fixture: ComponentFixture<NoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
