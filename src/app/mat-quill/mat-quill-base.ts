import {
	Directive,
	AfterViewInit,
	ElementRef,
	HostBinding,
	Inject,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	Optional,
	PLATFORM_ID,
	Renderer2,
	Self
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
	ControlValueAccessor,
	FormGroupDirective,
	NgControl,
	NgForm,
	Validator
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
	CanDisable,
	CanDisableCtor,
	CanUpdateErrorState,
	CanUpdateErrorStateCtor,
	ErrorStateMatcher,
	mixinDisabled,
	mixinErrorState,
} from '@angular/material/core';
import { HasErrorState } from '@angular/material/core/common-behaviors/error-state';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QUILL_CONFIG_TOKEN, QuillConfig, QuillEditorBase, QuillService } from 'ngx-quill';

// Boilerplate for applying mixins to _MatQuillBase
class MatQuillBase extends QuillEditorBase
{
	constructor(
		public _defaultErrorStateMatcher: ErrorStateMatcher,
		public _parentForm: NgForm,
		public _parentFormGroup: FormGroupDirective,
		public ngControl: NgControl,
		elementRef: ElementRef,
		domSanitizer: DomSanitizer,
		doc: any,
		platformId: any,
		renderer: Renderer2,
		zone: NgZone,
		config: QuillConfig,
		service: QuillService
	) {
		super(
			elementRef, domSanitizer, doc, platformId,
			renderer, zone, config, service
		)
	}
}

const _MatQuillMixinBase: CanUpdateErrorStateCtor & CanDisableCtor & typeof MatQuillBase =
	mixinErrorState(mixinDisabled(MatQuillBase));

@Directive()
export abstract class _MatQuillBase
	extends _MatQuillMixinBase
	implements AfterViewInit, CanDisable, CanUpdateErrorState,
		ControlValueAccessor, HasErrorState,
		MatFormFieldControl<any>, OnChanges,
		OnDestroy, Validator
{
	abstract controlType: string;
	focused = false;
	abstract id: string;

	constructor(
		defaultErrorStateMatcher: ErrorStateMatcher,
		@Optional() parentForm: NgForm,
		@Optional() parentFormGroup: FormGroupDirective,
		@Optional() @Self() public ngControl: NgControl,
		elementRef: ElementRef,
		domSanitizer: DomSanitizer,
		@Inject(DOCUMENT) doc: any,
		@Inject(PLATFORM_ID) platformId: any,
		renderer: Renderer2,
		zone: NgZone,
		@Inject(QUILL_CONFIG_TOKEN) @Optional() config: QuillConfig,
		service: QuillService
	) {
		super(
			defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl,
			elementRef, domSanitizer, doc, platformId, renderer, zone, config, service
		)

		if (this.ngControl != null) {
			this.ngControl.valueAccessor = this;
		}

		this.onBlur.subscribe(() => {
			this.focused = false;
			this.stateChanges.next();
		});
		this.onFocus.subscribe(() => {
			this.focused = true;
			this.stateChanges.next();
		});
	}

	/*
	 * GETTERS & SETTERS
	 */

	@Input()
	get disabled(): boolean
	{
		if (this.ngControl && this.ngControl.disabled !== null) {
			return this.ngControl.disabled;
		}
		return this._disabled;
	}
	set disabled(value: boolean)
	{
		this._disabled = coerceBooleanProperty(value);

		// Browsers may not fire the blur event if the input is disabled too quickly.
		// Reset from here to ensure that the element doesn't become stuck.
		if (this.focused) {
			this.focused = false;
			this.stateChanges.next();
		}
	}
	protected _disabled = false;

	get empty() {
		return coerceBooleanProperty(this.value);
	}

	@Input()
	get placeholder(): string { return this._placeholder; }
	set placeholder(value: string) {
		this._placeholder = value;
		this.stateChanges.next();
	}
	protected _placeholder: string;

	@Input()
	get required(): boolean { return this._required; }
	set required(value: boolean) {
		this._required = coerceBooleanProperty(value);
	}
	protected _required = false;

	@HostBinding('class.floating')
	get shouldLabelFloat() {
		return this.focused || !this.empty;
	}

	get value(): any
	{
		try {
			return this.valueGetter(this.quillEditor, this.editorElem!);
		} catch(e) {
			return;
		}
	}
	set value(value: any) {
		this.writeValue(value);
		this.stateChanges.next();
	}

	/*
	 * METHODS
	 */

	blur() {
		(this.editorElem.childNodes as NodeListOf<HTMLElement>)[0]['blur']()
	}

	focus() {
		this.quillEditor.focus();
	}

	@HostBinding('attr.aria-describedby') _describedBy = '';
	setDescribedByIds(ids: string[]) {
		this._describedBy = ids.join(' ');
	}

	onContainerClick(event: MouseEvent)
	{
		if (!this.focused) {
			this.quillEditor.focus();
		}
	}

	static ngAcceptInputType_disabled: boolean | string | null | undefined;
	static ngAcceptInputType_required: boolean | string | null | undefined;
}
