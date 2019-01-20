import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { DefaultComponent } from './default/default.component';
import { ActivateRtlComponent } from './activate-rtl/activate-rtl.component';
import { SanitizeHtmlComponent } from './sanitize-html/sanitize-html.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaComponent } from './formula/formula.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmojiComponent } from './emoji/emoji.component';
import { BubbleEditorComponent } from './bubble-editor/bubble-editor.component';
import { NoToolbarComponent } from './no-toolbar/no-toolbar.component';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { FormatObjectComponent } from './format-object/format-object.component';
import { FormatTextComponent } from './format-text/format-text.component'

@NgModule({
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
    FormatTextComponent
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
