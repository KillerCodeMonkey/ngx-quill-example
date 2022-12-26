import { Component } from '@angular/core'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent {
  content = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ]

  dangerousHtml = `<p><img src="https://google.com/" onerror="alert('Sanitizing not working :(')">Incorrect image src should not open alert</p>`
}
