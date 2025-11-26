import { Component } from '@angular/core';
import { BubbleEditorComponent } from './components/bubble-editor/bubble-editor.component';
import { ActivateRtlComponent } from './components/activate-rtl/activate-rtl.component';
import { ChildModule } from './components/child-module/child-module';
import { CustomToolbarComponent } from './components/custom-toolbar/custom-toolbar.component';
import { DefaultComponent } from './components/default/default.component';
import { FormatHtmlComponent } from './components/format-html/format-html.component';
import { FormatJsonComponent } from './components/format-json/format-json.component';
import { FormatObjectComponent } from './components/format-object/format-object.component';
import { FormatTextComponent } from './components/format-text/format-text.component';
import { FormulaComponent } from './components/formula/formula.component';
import { MentionComponent } from './components/mention/mention.component';
import { ModelValidation } from './components/model-validation/model-validation.component';
import { NoSanitizeHtmlComponent } from './components/no-sanitize-html/no-sanitize-html.component';
import { NoToolbarComponent } from './components/no-toolbar/no-toolbar.component';
import { QuillApiEmbedComponent } from './components/quill-api-embed/quill-api-embed.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SanitizeHtmlComponent } from './components/sanitize-html/sanitize-html.component';
import { ViewComponent } from './components/view/view.component';
import { ViewHTMLComponent } from './components/view-html/view-html.component';
import { SignalFormsComponent } from './components/signal-forms/signal-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BubbleEditorComponent, ActivateRtlComponent, ChildModule, CustomToolbarComponent, DefaultComponent, FormatHtmlComponent, FormatJsonComponent, FormatObjectComponent, FormatTextComponent, FormulaComponent, MentionComponent, ModelValidation, NoSanitizeHtmlComponent, NoToolbarComponent, QuillApiEmbedComponent, ReactiveFormsComponent, SanitizeHtmlComponent, ViewComponent, ViewHTMLComponent, SignalFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
