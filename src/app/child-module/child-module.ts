import { NgModule } from '@angular/core'

import { QuillModule } from 'ngx-quill'
import { ChildComponent } from './child.component'

@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [ChildComponent],
  imports: [QuillModule],
  providers: []
})
export class ChildModule { }
