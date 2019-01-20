import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  modules = {};
  constructor() {
    const values = [
      { id: 1, value: 'Fredrik Sundqvist' },
      { id: 2, value: 'Patrik Sjölin' }
    ];

    this.modules = {
      formula: true,
      syntax: true,
      toolbar: [['formula'], ['image'], ['code-block']],
    }
  }

  ngOnInit() {
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

}
