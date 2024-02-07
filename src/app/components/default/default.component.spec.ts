import {TestBed, waitForAsync} from '@angular/core/testing'

import {DefaultComponent} from './default.component'
import { QuillModule } from 'ngx-quill'

describe('Default component', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        DefaultComponent,
        QuillModule.forRoot()
      ],
      providers: QuillModule.forRoot().providers
    }).compileComponents()
  }))

  it('test', () => {
    const fixture = TestBed.createComponent(DefaultComponent)

    expect(fixture).toBeDefined()
  })
})