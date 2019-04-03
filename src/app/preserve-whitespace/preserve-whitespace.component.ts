import { Component } from '@angular/core'

@Component({
  selector: 'app-preserve-whitespace',
  templateUrl: './preserve-whitespace.component.html'
})
export class PreserveWhitespaceComponent {
  content = '<div>test    duplicated         whitespaces should be      preserved'
}
