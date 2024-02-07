import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatQuillModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-preserve-whitespace',
  standalone: true,
  templateUrl: './preserve-whitespace.component.html'
})
export class PreserveWhitespaceComponent {
  content = '<div>test    duplicated         whitespaces should be      preserved'
}
