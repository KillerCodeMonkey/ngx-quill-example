import { Component } from '@angular/core'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  imports: [QuillEditorComponent, MatQuillModule, MatFormFieldModule],
  selector: 'app-bubble-editor',
  standalone: true,
  templateUrl: './bubble-editor.component.html'
})
export class BubbleEditorComponent {
  placeholder = 'placeholder'
}
