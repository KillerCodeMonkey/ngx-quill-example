import { Component } from '@angular/core'

@Component({
  selector: 'app-no-sanitize-html',
  templateUrl: './no-sanitize-html.component.html'
})
export class NoSanitizeHtmlComponent {
  dangerousHtml = `<p><img src="https://google.com/" onerror="alert('Sanitizing not working :(')">Incorrect image src should not open alert</p>`
  dangerousModel = ''
}
