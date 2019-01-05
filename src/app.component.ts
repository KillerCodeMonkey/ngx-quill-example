
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { QuillEditorComponent } from 'ngx-quill';

import Quill from 'quill';
import 'quill-emoji/dist/quill-emoji.js';
import 'quill-emoji/dist/quill-emoji.css';

// add image resize module
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

// add mention module
import 'quill-mention';

// override p with div tag
const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);

import Counter from './counter';
Quill.register('modules/counter', Counter)

// Add fonts to whitelist
var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
Quill.register(Font, true);

@Component({
  selector: 'app-root',
  template: `
<h3>Default editor</h3>
<quill-editor [style]="{height: '200px'}" (onEditorCreated)="setFocus($event)"></quill-editor>

<h3>Sanitize html</h3>
<button (click)="dangerousModel = dangerousHtml">Set dangeours HTML</button>
<pre><code>{{ dangerousHtml }}</code></pre>
<quill-editor [(ngModel)]="dangerousModel" [sanitize]="true"></quill-editor>

<h3>Without html Sanitize</h3>
<button (click)="dangerousModel2 = dangerousHtml">Set dangeours HTML</button>
<pre><code>{{ dangerousHtml }}</code></pre>
<quill-editor [(ngModel)]="dangerousModel2"></quill-editor>

<h3>Reactive Forms and patch value</h3>
<button type="button" (click)="hide=!(!!hide)">hide / show</button>
<button type="button" (click)="form.enabled ? form.disable() : form.enable()">disable / enable</button>
<button type="button" (click)="backgroundColor = backgroundColor ? '' : 'grey'">toggle backgroundColor</button>
<form [formGroup]="form" >
  {{ form.get('editor').value }}
  <button type="button" (click)="patchValue()">patchValue</button>
  <button type="button" (click)="setControl()">setControl</button>

  <quill-editor #editor [style.display]="hide ? 'none' : 'block'" [style]="{ backgroundColor: backgroundColor }" [formControl]="form.controls['editor']"></quill-editor>
</form>

<h3>Formula & image resize editor & Keybinding on 'b' and 'shift + b', CodeBlock + Syntax Highlighting</h3>
<quill-editor #editor [modules]="modules" (onEditorCreated)="addBindingCreated($event)"></quill-editor>

<h3>Emoji</h3>
<quill-editor [modules]="{ toolbar: { container: [ 'emoji' ], handlers: { emoji: emptyHandler } }, 'emoji-toolbar': true, 'emoji-textarea': true, 'emoji-shortname': true }" (onEditorCreated)="addBindingCreated($event)"></quill-editor>

<h3>Bubble editor <button type="button" (click)="placeholder=placeholder + '!'">Change placeholder</button></h3>
<quill-editor theme="bubble" [placeholder]="placeholder"></quill-editor>

<h3>Editor without toolbar + required and ngModule</h3>
<button (click)="toggleReadOnly()">Toggle ReadOnly</button>
{{isReadOnly}}
{{title}}
<quill-editor [(ngModel)]="title" [maxLength]="5" [minLength]="3" [required]="true" [readOnly]="isReadOnly" [modules]="{toolbar: false}" (onContentChanged)="logChange($event);" (onSelectionChanged)="logSelection($event);"></quill-editor>
<h3>Custom Toolbar with toolbar title-attributes + Word counter</h3>
<quill-editor [modules]="{ counter: { container: '#counter', unit: 'word' } }">
  <div quill-editor-toolbar>
    <span class="ql-formats">
      <select class="ql-font">
        <option value="aref">Aref Ruqaa</option>
        <option value="mirza">Mirza</option>
        <option selected>Roboto</option>
      </select>
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

<h3>Fomat - object</h3>
<pre><code>
{{ objectFormat | json }}
</code></pre>
<quill-editor format="object" [(ngModel)]="objectFormat"></quill-editor>

<h3>Fomat - Text</h3>
<pre><code>
{{ textFormat }}
</code></pre>
<quill-editor format="text" [(ngModel)]="textFormat"></quill-editor>
  `,
  styles: [`
    quill-editor {
      display: block;
    }
    .ng-invalid {
      border: 1px dashed red;
    }

    /* Set default font-family */
    [quill-editor-element] {
      font-family: "Roboto";
    }

    /* Set dropdown font-families */
    [quill-editor-toolbar] .ql-font span[data-label="Aref Ruqaa"]::before {
      font-family: "Aref Ruqaa";
    }
    [quill-editor-toolbar] .ql-font span[data-label="Mirza"]::before {
      font-family: "Mirza";
    }
    [quill-editor-toolbar] .ql-font span[data-label="Roboto"]::before {
      font-family: "Roboto";
    }

    /* Set content font-families */
    .ql-font-mirza {
      font-family: "Mirza";
    }
    .ql-font-aref {
      font-family: "Aref Ruqaa";
    }
    /* We do not set Aref Ruqaa since it is the default font */
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = '<ul><li>I am example content</li><li><u>And this, too</u></li></ul>';
  isReadOnly = true;
  placeholder = 'placeholder';
  backgroundColor = '';
  form: FormGroup;
  hide = false;
  dangerousModel = '';
  dangerousModel2 = '';
  dangerousHtml=`<p><img src="http://google.com/" onerror="alert('Sanatizing not working :(')">Incorrect image src should not open alert</p>`;
  modules = {};
  textFormat = 'Hello World!';
  objectFormat = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ];

  constructor(fb: FormBuilder) {
    const values = [
      { id: 1, value: 'Fredrik Sundqvist' },
      { id: 2, value: 'Patrik Sjölin' }
    ];

    this.form = fb.group({
      editor: ['test']
    });

    this.modules = {
      formula: true,
      syntax: true,
      toolbar: [['formula'], ['image'], ['code-block']],
      imageResize: {},
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        source: function (searchTerm, renderList) {
          if (searchTerm.length === 0) {
            renderList(values, searchTerm);
          } else {
            const matches = [];
            for (let i = 0; i < values.length; i++)
              if (~values[i].value.toLowerCase().indexOf(searchTerm)) matches.push(values[i]);
            renderList(matches, searchTerm);
          }
        },
      }
    }
  }
  @ViewChild('editor') editor: QuillEditorComponent

  ngOnInit() {
    this.form
      .controls
      .editor
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {
        console.log('native fromControl value changes with debounce', data)
      });

    this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {
        console.log('view child + directly subscription', data)
      });
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      console.log('KEYBINDING B', range, context);
    });

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      console.log('KEYBINDING SHIFT + B', range, context);
    });
  }

  emptyHandler() {}

  setControl() {
    this.form.setControl('editor', new FormControl('test - new Control'))
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
