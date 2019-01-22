import { Component } from '@angular/core'

@Component({
  selector: 'app-no-sanitize-html',
  templateUrl: './no-sanitize-html.component.html'
})
export class NoSanitizeHtmlComponent {
  dangerousHtml = `<p><img src="http://google.com/" onerror="alert('Sanatizing not working :(')">Incorrect image src should not open alert</p>`
  dangerousModel = ''
}
