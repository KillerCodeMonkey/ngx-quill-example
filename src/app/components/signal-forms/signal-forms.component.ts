import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, signal, viewChild } from '@angular/core'
import { disabled, form, FormField, readonly, validate } from '@angular/forms/signals'

import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import { QuillEditorFieldComponent } from 'ngx-quill';


@Component({
  imports: [CommonModule, FormField, QuillEditorFieldComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-signal-forms',
  standalone: true,
  templateUrl: './signal-forms.component.html'
})
export class SignalFormsComponent {
  readonly quillfield = viewChild<QuillEditorFieldComponent>('quillField')

  disabled = signal(false)
  readonly = signal(false)
  editorField = signal({ editor: '' })
  form = form(this.editorField, p => {
    // Add a synchronous required validator to 'editorField'.
    validate(p.editor, () => {
      return this.quillfield()?.validate({
        required: true,
        minLength: 5
      }) || null
    })
    disabled(p.editor, () => this.disabled())
    readonly(p.editor, () => this.readonly())
  })
  backgroundColor = ''

  constructor() {
    toObservable(this.editorField)
      .pipe(
        takeUntilDestroyed(),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        // tslint:disable-next-line:no-console
        console.log('native field value changes with debounce', data)
      })
  }


  setControl() {
    this.form.editor().value.set('SET VALUE')
  }

  patchValue() {
    this.form.editor().value.update((currentValue) => `${currentValue ?? ''} <span style="background-color: rgb(255, 194, 102); color: rgb(230, 0, 0);">patched!</span>`)
  }
}
