import { Component } from '@angular/core'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent],
  selector: 'app-activate-rtl',
  standalone: true,
  templateUrl: './activate-rtl.component.html'
})
export class ActivateRtlComponent {
  activateRTL(editor: any) {
    editor.format('align', 'right')
    editor.format('direction', 'rtl')
  }
}
