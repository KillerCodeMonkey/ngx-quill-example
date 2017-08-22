import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged';

// override p with div tag
import * as Quill from 'quill';
const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);

import Counter from './counter';
Quill.register('modules/counter', Counter)

@Component({
  selector: 'app-root',
  template: `
<h3>Default editor</h3>
<quill-editor (onEditorCreated)="setFocus($event)"></quill-editor>

<h3>Reactive Forms and patch value</h3>
<button type="button" (click)="hide=!(!!hide)">hide / show</button>
<form [formGroup]="form">
  {{form.controls.editor.value}}
  <button type="button" (click)="patchValue()">patchValue</button>

  <quill-editor #editor [style.display]="hide ? 'none' : 'block'" formControlName="editor"></quill-editor>
</form>

<h3>Bubble editor</h3>
<quill-editor theme="bubble" placeholder=" "></quill-editor>

<h3>Editor without toolbar + required and ngModule</h3>
<button (click)="toggleReadOnly()">Toggle ReadOnly</button>
{{isReadOnly}}
{{title}}
<quill-editor [(ngModel)]="title" [maxLength]="5" [minLength]="3" [required]="true" [readOnly]="isReadOnly" [modules]="{toolbar: false}" (onContentChanged)="logChange($event);" (onSelectionChanged)="logSelection($event);"></quill-editor>
<h3>Custom Toolbar with toolbar title-attributes + Word counter</h3>
<quill-editor [modules]="{ counter: { container: '#counter', unit: 'word' } }">
  <div quill-editor-toolbar>
    <span class="ql-formats">
      <button class="ql-bold" [title]="'Bold'"></button>
    </span>
    <span class="ql-formats">
      <select class="ql-align" [title]="'Aligment'">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
      <select class="ql-align" [title]="'Aligment2'">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
    </span>
    <span class="ql-formats">
      <div id="counter"></div>
    </span>
  </div>
</quill-editor>

  `,
  styles: [`
    quill-editor {
      display: block;
    }
    .ng-invalid {
      border: 1px dashed red;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Quill works!';
  isReadOnly = false;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['test']
    });
  }
  @ViewChild('editor') editor: QuillEditorComponent

  ngOnInit() {
    this.form
      .controls
      .editor
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('native fromControl value changes with debounce', data)
      });

    this.editor
      .onContentChanged.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('view child + directly subscription', data)
      });
  }

  setFocus($event) {
    $event.focus();
  }

  patchValue() {
    this.form.controls['editor'].patchValue(`${this.form.controls['editor'].value} patched!`)
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }

  logChange($event: any) {
    console.log($event);
  }

  logSelection($event: any) {
    console.log($event);
  }
}
