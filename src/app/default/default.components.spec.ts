import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { QuillModule } from 'ngx-quill'

import {DefaultComponent } from './default.component'

describe('TextLayerEditorComponent', () => {
  let fixture: ComponentFixture<DefaultComponent>

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ DefaultComponent ],
      imports: [FormsModule, QuillModule],
      providers: QuillModule.forRoot().providers
    }).compileComponents()
    fixture = TestBed.createComponent(DefaultComponent) as ComponentFixture<DefaultComponent>
  }))

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy()
  })
})
