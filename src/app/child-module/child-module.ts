import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'

import { QuillModule } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { ChildComponent } from './child.component'

@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [ChildComponent],
  imports: [QuillModule, MatQuillModule, MatFormFieldModule],
  providers: []
})
export class ChildModule { }
