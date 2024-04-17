import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-model-validation',
  standalone: true,
  templateUrl: './model-validation.component.html'
})
export class ModelValidation {
  model = '<div><strong>test</strong></div>'
  formGroup: FormGroup

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      control: new FormControl('too long for validation'),
      matControl: new FormControl('')
    })
  }
}
