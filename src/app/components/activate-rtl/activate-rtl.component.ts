import { Component } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'

@Component({
  imports: [QuillEditorComponent, MatFormFieldModule, MatQuillModule],
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
