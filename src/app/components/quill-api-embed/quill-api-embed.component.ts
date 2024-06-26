import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent, FormsModule],
  selector: 'app-quill-api-embed',
  standalone: true,
  templateUrl: './quill-api-embed.component.html'
})
export class QuillApiEmbedComponent {
  content = ''
  created(editor: any) {
    const range = editor.getSelection(true)
    editor.insertEmbed(range.index, 'image', 'https://cloud.githubusercontent.com/assets/2264672/20601381/a51753d4-b258-11e6-92c2-1d79efa5bede.png', 'user')
  }
}
