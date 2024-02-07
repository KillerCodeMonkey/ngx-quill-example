import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { QuillEditorComponent } from 'ngx-quill'

import Quill from 'quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatFormFieldModule, MatQuillModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-formula',
  standalone: true,
  templateUrl: './formula.component.html'
})
export class FormulaComponent {

  modules = {}
  content = `
  <p> Consider the point P on the curve y = f (x) whose coordinates are (x, y) and another point Q where coordinates are (x + Δx, y + Δy). The slope of the line joining P and Q is given by: </p> <p> <span class=\"ql-formula\" data-value=\"\\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x}\"> \\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x} </span> -------------------- (1) </p> <p> <span class=\"ql-formula\" data-value=\"\\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x}\"> \\tan\\theta = \\frac{\\triangle y}{\\triangle x}=\\frac{(y+\\triangle y)-y}{\\triangle x} </span> -------------------- (2) </p>`
  matContent = this.content
  constructor() {
    this.modules = {
      syntax: true,
      toolbar: [['formula'], ['code-block']]
    }
  }

  addBindingCreated(quill: Quill | any) {
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
