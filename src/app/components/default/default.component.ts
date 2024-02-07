import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill'
import Quill from 'quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  imports: [QuillEditorComponent, MatQuillModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  blurred = false
  focused = false

  created(event: Quill | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }
  nativeFocus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-focus', $event)
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
  nativeBlur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-blur', $event)
  }
}
