import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatFormFieldModule, MatQuillModule],
  selector: 'app-no-sanitize-html',
  standalone: true,
  templateUrl: './no-sanitize-html.component.html'
})
export class NoSanitizeHtmlComponent {
  dangerousHtml = `<p><img src="https://asdfasdfasdf.example/" onclick="alert('Sanitizing not working :(')">Incorrect image src should not open alert</p>`
  dangerousModel = ''
}
