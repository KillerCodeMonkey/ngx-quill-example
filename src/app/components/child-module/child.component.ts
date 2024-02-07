import { Component, Inject } from '@angular/core'

import { QUILL_CONFIG_TOKEN, QuillConfig } from 'ngx-quill'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  constructor(@Inject(QUILL_CONFIG_TOKEN) config: QuillConfig) {
    // tslint:disable-next-line:no-console
    console.log('Child-Module - Global config', config)
  }
}
