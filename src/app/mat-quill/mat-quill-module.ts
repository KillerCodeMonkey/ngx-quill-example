import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { MatFormFieldModule } from '@angular/material/form-field'

import { QuillModule } from 'ngx-quill'
import { MatQuill } from './mat-quill'

@NgModule({
  declarations: [MatQuill],
  exports: [MatQuill],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    MatFormFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatQuillModule { }
