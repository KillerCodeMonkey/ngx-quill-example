import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { QuillEditorComponent } from 'ngx-quill'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {
  hide = false
  form: FormGroup
  backgroundColor = ''
  @ViewChild('editor') editor: QuillEditorComponent

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['test']
    })
  }

  ngOnInit() {
    this.form
      .controls
      .editor
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        // tslint:disable-next-line:no-console
        console.log('native fromControl value changes with debounce', data)
      })

    this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        // tslint:disable-next-line:no-console
        console.log('view child + directly subscription', data)
      })
  }

  setControl() {
    this.form.setControl('editor', new FormControl('test - new Control'))
  }

  patchValue() {
    this.form.get('editor').patchValue(`${this.form.get('editor').value} patched!`)
  }

}
