import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { QuillModule } from 'ngx-quill'

import { AppComponent } from './app.component'

import { ActivateRtlComponent } from './activate-rtl/activate-rtl.component'
import { BubbleEditorComponent } from './bubble-editor/bubble-editor.component'
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component'
import { DefaultComponent } from './default/default.component'
import { EmojiComponent } from './emoji/emoji.component'
import { FormatJsonComponent } from './format-json/format-json.component'
import { FormatObjectComponent } from './format-object/format-object.component'
import { FormatTextComponent } from './format-text/format-text.component'
import { FormulaComponent } from './formula/formula.component'
import { NoSanitizeHtmlComponent } from './no-sanitize-html/no-sanitize-html.component'
import { NoToolbarComponent } from './no-toolbar/no-toolbar.component'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'
import { SanitizeHtmlComponent } from './sanitize-html/sanitize-html.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DefaultComponent,
    ActivateRtlComponent,
    SanitizeHtmlComponent,
    FormulaComponent,
    ReactiveFormsComponent,
    EmojiComponent,
    BubbleEditorComponent,
    NoToolbarComponent,
    CustomToolbarComponent,
    FormatObjectComponent,
    FormatTextComponent,
    NoSanitizeHtmlComponent,
    FormatJsonComponent
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
