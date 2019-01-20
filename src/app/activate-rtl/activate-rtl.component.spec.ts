import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateRtlComponent } from './activate-rtl.component';

describe('ActivateRtlComponent', () => {
  let component: ActivateRtlComponent;
  let fixture: ComponentFixture<ActivateRtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateRtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
