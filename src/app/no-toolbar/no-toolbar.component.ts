import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-no-toolbar',
  templateUrl: './no-toolbar.component.html'
})
export class NoToolbarComponent {
  isReadOnly = true
  isRequired = true
  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: ['']
    })
  }

  logChange($event: any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  logSelection($event: any) {
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
