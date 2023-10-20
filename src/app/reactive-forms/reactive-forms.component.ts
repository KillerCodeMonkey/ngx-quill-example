import { Component, OnInit, ViewChild } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { ContentChange, QuillEditorComponent } from 'ngx-quill'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { MatQuill } from '../mat-quill/mat-quill'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {
  hide = false
  form: FormGroup
  complexForm: FormGroup
  backgroundColor = ''
  @ViewChild('editor', {
    static: true
  }) editor: QuillEditorComponent
  @ViewChild('matEditor', {
    static: true
  }) matEditor: MatQuill

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['<ol><li>test</li><li>123</li></ol>'],
      matEditor: ['<ol><li>test</li><li>123</li></ol>']
    })
    this.complexForm = fb.group({
      contents: new FormArray([
        fb.group({ body: new FormControl('<ol><li>test</li><li>123</li></ol>') })
      ])
    })
  }

  formArray() {
    return this.complexForm.get('contents') as FormArray
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
      .subscribe((data: ContentChange) => {
        // tslint:disable-next-line:no-console
        console.log('view child + directly subscription', data)
      })

    this.matEditor
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
    this.form.setControl('editor', new FormControl('test - new Control'))
    this.form.setControl('matEditor', new FormControl('test - new Control'))
  }

  patchValue() {
    this.form.get('editor').patchValue(`${this.form.get('editor').value} patched!`)
    this.form.get('matEditor').patchValue(`${this.form.get('matEditor').value} patched!`)
  }

}
