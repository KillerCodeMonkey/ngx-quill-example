import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizeHtmlComponent } from './sanitize-html.component';

describe('SanitizeHtmlComponent', () => {
  let component: SanitizeHtmlComponent;
  let fixture: ComponentFixture<SanitizeHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizeHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
