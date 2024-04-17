import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [QuillEditorComponent, FormsModule, JsonPipe],
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
