import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatQuillModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-sanitize-html',
  standalone: true,
  templateUrl: './sanitize-html.component.html'
})
export class SanitizeHtmlComponent {
  dangerousHtml = `<p><img src="https://google.com/" onerror="alert('Sanatizing not working :(')">Incorrect image src should not open alert</p>`
  dangerousModel = ''
}
