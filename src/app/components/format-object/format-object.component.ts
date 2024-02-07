import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatQuillModule, MatFormFieldModule, JsonPipe],
  selector: 'app-format-object',
  standalone: true,
  templateUrl: './format-object.component.html'
})
export class FormatObjectComponent {

  objectFormat = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ]
}
