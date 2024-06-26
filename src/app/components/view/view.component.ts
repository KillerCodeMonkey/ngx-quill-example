import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { QuillViewComponent } from 'ngx-quill'

@Component({
  imports: [QuillViewComponent],
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewComponent {
  content = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ]

  dangerousHtml = `<p><img src="https://google.com/" onerror="alert('Sanitizing not working :(')">Incorrect image src should not open alert</p>
  <p>empty lines:</p>
  <p><p/>
  <p><p/>
  <p><p/>
  <p>END</p>`
}
