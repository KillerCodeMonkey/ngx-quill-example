import { FormBuilder, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
export declare class AppComponent {
    title: string;
    isReadOnly: boolean;
    form: FormGroup;
    constructor(fb: FormBuilder);
    editor: QuillEditorComponent;
    ngOnInit(): void;
    setFocus($event: any): void;
    patchValue(): void;
    toggleReadOnly(): void;
    logChange($event: any): void;
    logSelection($event: any): void;
}
