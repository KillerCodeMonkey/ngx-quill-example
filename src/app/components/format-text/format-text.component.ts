import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent, FormsModule],
  selector: 'app-format-text',
  standalone: true,
  templateUrl: './format-text.component.html'
})
export class FormatTextComponent {
  textFormat = 'Hello World!'
}
