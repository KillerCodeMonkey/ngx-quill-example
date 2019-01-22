import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSanitizeHtmlComponent } from './no-sanitize-html.component';

describe('NoSanitizeHtmlComponent', () => {
  let component: NoSanitizeHtmlComponent;
  let fixture: ComponentFixture<NoSanitizeHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSanitizeHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSanitizeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
