import { Component } from '@angular/core'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  setFocus(event) {
    // tslint:disable-next-line:no-console
    console.log(event)
    event.focus()
  }
}
