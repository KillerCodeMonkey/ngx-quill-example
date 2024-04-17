import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'

// import Quill from 'quill/dist/quill'
// import 'quill-emoji/dist/quill-emoji.js'

@Component({
  imports: [QuillEditorComponent,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-emoji',
  standalone: true,
  templateUrl: 'emoji.component.html'
})
export class EmojiComponent {
  modules = {}
  content = ''
  matContent = ''
  constructor() {
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'toolbar': { container: [ 'emoji' ] }
    }
  }

  addBindingCreated(quill: any) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range: any, context: any) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING B', range, context)
    })

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    } as any, (range: any, context: any) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING SHIFT + B', range, context)
    })
  }
}
