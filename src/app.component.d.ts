import { FormBuilder, FormGroup } from '@angular/forms';
export declare class AppComponent {
    title: string;
    isReadOnly: boolean;
    form: FormGroup;
    constructor(fb: FormBuilder);
    patchValue(): void;
    toggleReadOnly(): void;
    logChange($event: any): void;
    logSelection($event: any): void;
}
