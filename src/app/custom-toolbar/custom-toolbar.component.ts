import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html'
})
export class CustomToolbarComponent {
  editorModel = [{
    attributes: {
      font: 'roboto'
    },
    insert: 'test'
  }]
}
