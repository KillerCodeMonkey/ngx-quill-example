import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, signal } from '@angular/core'
import { Field, form, required } from '@angular/forms/signals'
import { ContentChange, QuillEditorComponent } from 'ngx-quill'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';

@Component({
  imports: [QuillEditorComponent, CommonModule, Field],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-signal-forms',
  standalone: true,
  templateUrl: './signal-forms.component.html'
})
export class SignalFormsComponent implements OnInit {
  hide = false
  editorField = signal({ editor: '' })
  form = form(this.editorField, p => {
    // Add a synchronous required validator to 'editorField'.
    required(p.editor, { message: 'Editor is required' });
  })
  backgroundColor = ''
  @ViewChild('editor', {
    static: true
  }) editor: QuillEditorComponent | undefined

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

  ngOnInit() {
    this.editor!
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((data: ContentChange) => {
        // tslint:disable-next-line:no-console
        console.log('view child + directly subscription', data)
      })
  }

  setControl() {
    this.form.editor().value.set('SET VALUE')
  }

  patchValue() {
    this.form.editor().value.update((currentValue) => `${currentValue} <span style="background-color: rgb(255, 194, 102); color: rgb(230, 0, 0);">patched!</span>`)
  }

}
