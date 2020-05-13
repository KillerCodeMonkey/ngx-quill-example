import { Component, ViewChild } from '@angular/core'
import 'quill-mention'

import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html'
})
export class MentionComponent {
  @ViewChild(QuillEditorComponent, { static: true }) editor: QuillEditorComponent
  content = ''
  matContent = ''

  modules = {
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      onSelect: (item, insertItem) => {
        const editor = this.editor.quillEditor
        insertItem(item)
        // necessary because quill-mention triggers changes as 'api' instead of 'user'
        editor.insertText(editor.getLength() - 1, '', 'user')
      },
      source: (searchTerm, renderList) => {
        const values = [
          { id: 1, value: 'Fredrik Sundqvist' },
          { id: 2, value: 'Patrik Sjölin' }
        ]

        if (searchTerm.length === 0) {
          renderList(values, searchTerm)
        } else {
          const matches = []

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
