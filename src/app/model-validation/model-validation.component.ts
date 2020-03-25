import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-model-validation',
  templateUrl: './model-validation.component.html'
})
export class ModelValidation {
  model = ''
  formGroup: FormGroup

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      control: new FormControl('too long for validation')
    })
  }
}
