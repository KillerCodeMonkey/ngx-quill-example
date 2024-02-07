import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatQuillModule, MatFormFieldModule],
  selector: 'app-format-text',
  standalone: true,
  templateUrl: './format-text.component.html'
})
export class FormatTextComponent {
  textFormat = 'Hello World!'
}
