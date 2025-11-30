import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ContentChange, QuillEditorComponent, SelectionChange } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent, ReactiveFormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-no-toolbar',
  standalone: true,
  templateUrl: './no-toolbar.component.html'
})
export class NoToolbarComponent {
  isReadOnly = false
  isRequired = false
  form: FormGroup

  cdr = inject(ChangeDetectorRef)

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      matTitle: [''],
      title: ['']
    })

    this.form.get('title')!.valueChanges.subscribe(() => this.cdr.detectChanges())
  }

  logChange($event: ContentChange | any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  logSelection($event: SelectionChange | any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly
  }

  toggleRequired() {
    this.isRequired = !this.isRequired
  }
}
