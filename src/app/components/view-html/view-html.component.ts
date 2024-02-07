import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { QuillViewHTMLComponent } from 'ngx-quill'

@Component({
  imports: [QuillViewHTMLComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-view-html',
  standalone: true,
  templateUrl: './view-html.component.html'
})
export class ViewHTMLComponent {
  content = '<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>'
}
