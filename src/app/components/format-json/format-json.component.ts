import { Component } from '@angular/core'
import { QuillEditorComponent } from 'ngx-quill'
import { FormsModule } from '@angular/forms'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [QuillEditorComponent, FormsModule, JsonPipe],
  selector: 'app-format-json',
  standalone: true,
  templateUrl: './format-json.component.html'
})
export class FormatJsonComponent {
  jsonFormat = '{\"ops\":[{\"insert\":\"hello\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"world\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"}]}'
}
