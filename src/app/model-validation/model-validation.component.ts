import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-model-validation',
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
