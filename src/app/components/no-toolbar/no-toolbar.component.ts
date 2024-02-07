import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ContentChange, QuillEditorComponent, SelectionChange } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'

@Component({
  imports: [QuillEditorComponent, ReactiveFormsModule, MatFormFieldModule, MatQuillModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-no-toolbar',
  standalone: true,
  templateUrl: './no-toolbar.component.html'
})
export class NoToolbarComponent {
  isReadOnly = false
  isRequired = false
  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      matTitle: [''],
      title: ['']
    })
  }

  logChange($event: ContentChange | any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  logSelection($event: SelectionChange | any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly
  }

  toggleRequired() {
    this.isRequired = !this.isRequired
  }
}
