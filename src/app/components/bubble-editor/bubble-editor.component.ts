import { Component } from '@angular/core'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent],
  selector: 'app-bubble-editor',
  standalone: true,
  templateUrl: './bubble-editor.component.html'
})
export class BubbleEditorComponent {
  placeholder = 'placeholder'
}
