import { Component, ViewEncapsulation } from '@angular/core';

// override p with div tag
import * as Quill from 'quill';
const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);

@Component({
  selector: 'app-root',
  template: `
<h3>Default editor</h3>
<quill-editor></quill-editor>

<h3>Bubble editor</h3>
<quill-editor theme="bubble"></quill-editor>

<h3>Editor without toolbar + required and ngModule</h3>
<button (click)="toggleReadOnly()">Toggle ReadOnly</button>
{{isReadOnly}}
{{title}}
<quill-editor [(ngModel)]="title" [maxLength]="5" [minLength]="3" required="true" [readOnly]="isReadOnly" [modules]="{toolbar: false}" (onContentChanged)="logChange($event);"></quill-editor>
<h3>Custom Toolbar with toolbar title-attributes</h3>
<quill-editor>
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

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }

  logChange($event: any) {
    console.log($event);
  }
}
