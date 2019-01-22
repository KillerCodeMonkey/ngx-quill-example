import { Component } from '@angular/core'

@Component({
  selector: 'app-activate-rtl',
  templateUrl: './activate-rtl.component.html'
})
export class ActivateRtlComponent {
  activateRTL(editor) {
    editor.format('align', 'right')
    editor.format('direction', 'rtl')
  }
}
