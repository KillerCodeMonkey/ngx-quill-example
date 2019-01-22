import { Component } from '@angular/core'

@Component({
  selector: 'app-format-object',
  templateUrl: './format-object.component.html'
})
export class FormatObjectComponent {

  objectFormat = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ]
}
