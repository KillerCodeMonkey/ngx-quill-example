import { Component } from '@angular/core'

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'

@Component({
  selector: 'app-emoji',
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

  addBindingCreated(quill: Quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING B', range, context)
    })

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    } as any, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING SHIFT + B', range, context)
    })
  }
}
