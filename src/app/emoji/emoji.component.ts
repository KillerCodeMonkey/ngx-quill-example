import { Component } from '@angular/core'

import 'quill-emoji/dist/quill-emoji.js'

import 'quill-emoji/dist/quill-emoji.css'

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html'
})
export class EmojiComponent {
  modules = {}
  constructor() {
    this.modules = {
      toolbar: [['formula'], ['image'], ['code-block']]
    }
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING B', range, context)
    })

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING SHIFT + B', range, context)
    })
  }
}
