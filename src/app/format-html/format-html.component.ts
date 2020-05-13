import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-format-html',
  templateUrl: './format-html.component.html'
})
export class FormatHtmlComponent {
  form: FormGroup = this.fb.group({
    html: new FormControl('<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>'),
    matQuillHtml: new FormControl('<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>')
  })

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {}

  ngOnInit() {
    setTimeout(() => {
      this.form.get('html').patchValue('<ol><li><sup>test</sup></li></ol><div><a href="https://google.de" rel="noopener noreferrer" target="_blank">asdfasdf</a></div>')
      this.form.get('matQuillHtml').patchValue('<ol><li><sup>test</sup></li></ol><div><a href="https://google.de" rel="noopener noreferrer" target="_blank">asdfasdf</a></div>')
    }, 4000)
  }

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
