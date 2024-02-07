import { Component } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { QuillEditorComponent } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { FormsModule } from '@angular/forms'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatQuillModule, MatFormFieldModule, JsonPipe],
  selector: 'app-format-json',
  standalone: true,
  templateUrl: './format-json.component.html'
})
export class FormatJsonComponent {
  jsonFormat = '{\"ops\":[{\"insert\":\"hello\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"world\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"}]}'
}
