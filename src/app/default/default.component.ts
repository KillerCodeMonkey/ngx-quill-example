import { Component } from '@angular/core'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  blured = false
  focused = false

  created(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blured = true
  }
}
