import { Component } from '@angular/core'

@Component({
  selector: 'app-no-toolbar',
  templateUrl: './no-toolbar.component.html'
})
export class NoToolbarComponent {
  isReadOnly = true
  title = 'To far shores tossed.'

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
}
