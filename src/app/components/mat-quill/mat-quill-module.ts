import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input';

import { QuillModule } from 'ngx-quill'
import { MatQuill } from './mat-quill'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [MatQuill],
  exports: [MatQuill],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    MatInputModule,
    MatFormFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatQuillModule { }
