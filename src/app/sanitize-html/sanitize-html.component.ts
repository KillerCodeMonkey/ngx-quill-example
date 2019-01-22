import { Component } from '@angular/core'

@Component({
  selector: 'app-sanitize-html',
  templateUrl: './sanitize-html.component.html'
})
export class SanitizeHtmlComponent {
  dangerousHtml = `<p><img src="http://google.com/" onerror="alert('Sanatizing not working :(')">Incorrect image src should not open alert</p>`
  dangerousModel = ''
}
