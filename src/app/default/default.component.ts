import { Component } from '@angular/core'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  setFocus(event) {
    console.log(event)
    event.focus()
  }
}
