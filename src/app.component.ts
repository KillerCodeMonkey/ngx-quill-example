import { Component, ViewEncapsulation } from '@angular/core';

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
