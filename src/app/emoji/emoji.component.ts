import { Component, OnInit } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';
import 'quill-emoji/dist/quill-emoji.css';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {
  modules = {};
  constructor() { 
    this.modules = {
      toolbar: [['formula'], ['image'], ['code-block']],
    }
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      console.log('KEYBINDING B', range, context);
    });

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      console.log('KEYBINDING SHIFT + B', range, context);
    });
  }

  ngOnInit() {
  }

}
