import { Component } from '@angular/core'
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { QuillEditor } from 'ngx-quill'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  blured = false
  focused = false

  created(event: QuillEditor) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blured = true
  }
}
