import {
  Component,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core'
import { MatFormFieldControl } from '@angular/material/form-field'
import { _MatQuillBase } from './mat-quill-base'

// Increasing integer for generating unique ids for mat-quill components.
let nextUniqueId = 0

const SELECTOR = 'mat-quill'

@Component({
  selector: SELECTOR,
  exportAs: 'matQuill',
  template: `
    @if (toolbarPosition !== 'top') {
      @if (preserve) {
        <pre quill-editor-element></pre>
      } @else {
        <div quill-editor-element></div>
      }
    }
    <ng-content select="[quill-editor-toolbar]"></ng-content>
    @if (toolbarPosition === 'top') {
      @if (preserve) {
        <pre quill-editor-element></pre>
      } @else {
        <div quill-editor-element></div>
      }
    }
    <ng-content></ng-content>
  `,
  inputs: ['disabled'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatQuill }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatQuill extends _MatQuillBase
{
  controlType = SELECTOR
  @HostBinding() id = `${SELECTOR}-${nextUniqueId++}`

  static ngAcceptInputType_disabled: boolean | string | null | undefined
  static ngAcceptInputType_required: boolean | string | null | undefined
}
