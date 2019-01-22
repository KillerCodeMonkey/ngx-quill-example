import { Component, ViewEncapsulation } from '@angular/core'
import Quill from 'quill'
import Counter from '../counter'

Quill.register('modules/counter', Counter)

const font = Quill.import('formats/font')
// We do not add Aref Ruqaa since it is the default
font.whitelist = ['mirza', 'roboto', 'aref']
Quill.register(font, true)

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html'
})
export class CustomToolbarComponent {}
