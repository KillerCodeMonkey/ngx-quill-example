import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [QuillEditorComponent, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-custom-toolbar',
  standalone: true,
  templateUrl: './custom-toolbar.component.html'
})
export class CustomToolbarComponent {
  editorModel = [{
    attributes: {
      font: 'roboto'
    },
    insert: 'test'
  }]
}
