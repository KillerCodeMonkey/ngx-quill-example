import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core'
// import 'quill-mention'

import { QuillEditorComponent } from 'ngx-quill'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatQuillModule } from '../mat-quill/mat-quill-module'

@Component({
  imports: [QuillEditorComponent, FormsModule, MatFormFieldModule, MatQuillModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-mention',
  standalone: true,
  templateUrl: './mention.component.html'
})
export class MentionComponent {
  @ViewChild(QuillEditorComponent, { static: true }) editor: QuillEditorComponent | undefined
  content = ''
  matContent = ''

  modules = {
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      onSelect: (item: any, insertItem: any) => {
        const editor = this.editor!.quillEditor
        insertItem(item)
        // necessary because quill-mention triggers changes as 'api' instead of 'user'
        editor.insertText(editor.getLength() - 1, '', 'user')
      },
      source: (searchTerm: any, renderList: any) => {
        const values = [
          { id: 1, value: 'Fredrik Sundqvist' },
          { id: 2, value: 'Patrik Sjölin' }
        ]

        if (searchTerm.length === 0) {
          renderList(values, searchTerm)
        } else {
          const matches: any[] = []

          values.forEach((entry) => {
            if (entry.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              matches.push(entry)
            }
          })
          renderList(matches, searchTerm)
        }
      }
    },
    toolbar: []
  }
}
