import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ContentChange, SelectionChange } from 'ngx-quill'

@Component({
  selector: 'app-no-toolbar',
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

  logChange($event: ContentChange) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  logSelection($event: SelectionChange) {
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
