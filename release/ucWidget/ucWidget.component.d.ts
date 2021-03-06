import { AfterViewInit, AfterViewChecked, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class UcWidgetComponent implements AfterViewInit, AfterViewChecked {
    onUploadComplete: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onProgress: EventEmitter<any>;
    private element;
    private inputElement;
    private renderer;
    private widget;
    private _publicKey;
    private _multiple;
    private _multipleMax;
    private _multipleMin;
    private _imagesOnly;
    private _previewStep;
    private _crop;
    private _imageShrink;
    private _clearable;
    private _tabs;
    private _inputAcceptTypes;
    private _preferredTypes;
    private _systemDialog;
    private _secureSignature;
    private _secureExpire;
    private _value;
    private _cdnBase;
    private _doNotStore;
    private _reinitRequired;
    private _isClearValue;
    constructor(renderer: Renderer2, element: ElementRef);
    publicKey: string;
    multiple: boolean;
    multipleMax: number;
    multipleMin: number;
    imagesOnly: boolean;
    previewStep: boolean;
    crop: any;
    imageShrink: string;
    clearable: boolean;
    tabs: string;
    inputAcceptTypes: string;
    preferredTypes: string;
    systemDialog: boolean;
    secureSignature: string;
    secureExpire: string;
    value: string;
    cdnBase: string;
    doNotStore: boolean;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    reset(clearUploads?: boolean): void;
    clearUploads(): void;
    openDialog(): void;
    private setReinitFlag(isClearValue);
    private setInputAttr(key, value);
    private initInputElement();
    private init(removeUploads?);
    private destroy();
}
