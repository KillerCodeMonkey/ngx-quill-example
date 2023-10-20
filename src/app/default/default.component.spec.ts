import {Component, ViewChild} from '@angular/core'
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing'

import {DefaultComponent} from './default.component'
import { QuillModule } from 'ngx-quill'
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'

import { MatQuillModule } from '../mat-quill/mat-quill-module'

describe('Default component', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultComponent],
      imports: [
        CommonModule,
        MatQuillModule,
        MatFormFieldModule,
        QuillModule.forRoot()
      ],
      providers: QuillModule.forRoot().providers
    }).compileComponents()
  }))

  test('test', () => {
    const fixture = TestBed.createComponent(DefaultComponent)

    expect(fixture).toBeDefined()
  })
})