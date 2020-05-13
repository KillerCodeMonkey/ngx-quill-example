import { Component } from '@angular/core'

import Quill from 'quill'

import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageResize', ImageResize)

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html'
})
export class FormulaComponent {

  modules = {}
  content = `
  <p> Consider the point P on the curve y = f (x) whose coordinates are (x, y) and another point Q where coordinates are (x + Δx, y + Δy). The slope of the line joining P and Q is given by: </p> <p> <span class=\"ql-formula\" data-value=\"\\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x}\"> \\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x} </span> -------------------- (1) </p> <p> <span class=\"ql-formula\" data-value=\"\\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x}\"> \\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x} </span> -------------------- (2) </p>`
  matContent = this.content
  constructor() {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true,
      toolbar: [['formula'], ['image'], ['code-block']]
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
