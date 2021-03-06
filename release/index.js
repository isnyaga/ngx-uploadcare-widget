(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"), require("uploadcare-widget"));
	else if(typeof define === 'function' && define.amd)
		define("ngx-uploadcare-widget", ["@angular/core", "@angular/platform-browser", "uploadcare-widget"], factory);
	else if(typeof exports === 'object')
		exports["ngx-uploadcare-widget"] = factory(require("@angular/core"), require("@angular/platform-browser"), require("uploadcare-widget"));
	else
		root["ngx-uploadcare-widget"] = factory(root["@angular/core"], root["@angular/platform-browser"], root["uploadcare-widget"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE_uploadcare_widget__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget__ = __webpack_require__("./src/ucWidget/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucWidgetCustom__ = __webpack_require__("./src/ucWidgetCustom/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetCustomComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__ucWidgetCustom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uploadcare_widget__ = __webpack_require__("uploadcare-widget");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uploadcare_widget__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2_uploadcare_widget__) if(["UcWidgetComponent","UcWidgetModule","UcWidgetCustomComponent","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2_uploadcare_widget__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ "./src/ucWidget/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__ = __webpack_require__("./src/ucWidget/ucWidget.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__["a"]; });




/***/ }),

/***/ "./src/ucWidget/ucWidget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__ = __webpack_require__("uploadcare-widget");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.start({ integration: "Angular/" + __WEBPACK_IMPORTED_MODULE_0__angular_core__["VERSION"].full + "; Ngx-Uploadcare-Widget/" + "1.0.1" });
var UcWidgetComponent = /** @class */ (function () {
    function UcWidgetComponent(renderer, element) {
        this.onUploadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._publicKey = 'demopublickey';
        this._value = null;
        this._cdnBase = null;
        this._reinitRequired = false;
        this._isClearValue = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(UcWidgetComponent.prototype, "publicKey", {
        get: function () { return this._publicKey; },
        set: function (publicKey) {
            this._publicKey = publicKey;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multiple", {
        get: function () { return this._multiple; },
        set: function (multiple) {
            this._multiple = multiple;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multipleMax", {
        get: function () { return this._multipleMax; },
        set: function (multipleMax) {
            this._multipleMax = multipleMax;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "multipleMin", {
        get: function () { return this._multipleMin; },
        set: function (multipleMin) {
            this._multipleMin = multipleMin;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "imagesOnly", {
        get: function () { return this._imagesOnly; },
        set: function (imagesOnly) {
            this._imagesOnly = imagesOnly;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "previewStep", {
        get: function () { return this._previewStep; },
        set: function (previewStep) {
            this._previewStep = previewStep;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "crop", {
        get: function () { return this._crop; },
        set: function (crop) {
            this._crop = crop;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "imageShrink", {
        get: function () { return this._imageShrink; },
        set: function (imageShrink) {
            this._imageShrink = imageShrink;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "clearable", {
        get: function () { return this._clearable; },
        set: function (clearable) {
            this._clearable = clearable;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "tabs", {
        get: function () { return this._tabs; },
        set: function (tabs) {
            this._tabs = tabs;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "inputAcceptTypes", {
        get: function () { return this._inputAcceptTypes; },
        set: function (inputAcceptTypes) {
            this._inputAcceptTypes = inputAcceptTypes;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "preferredTypes", {
        get: function () { return this._preferredTypes; },
        set: function (preferredTypes) {
            this._preferredTypes = preferredTypes;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "systemDialog", {
        get: function () { return this._systemDialog; },
        set: function (systemDialog) {
            this._systemDialog = systemDialog;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "secureSignature", {
        get: function () { return this._secureSignature; },
        set: function (secureSignature) {
            this._secureSignature = secureSignature;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "secureExpire", {
        get: function () { return this._secureExpire; },
        set: function (secureExpire) {
            this._secureExpire = secureExpire;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            this._value = value;
            if (this.widget) {
                this.setReinitFlag(false);
                this.widget.value(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "cdnBase", {
        get: function () { return this._cdnBase; },
        set: function (cdnBase) {
            this._cdnBase = cdnBase;
            this.setReinitFlag(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UcWidgetComponent.prototype, "doNotStore", {
        get: function () { return this._doNotStore; },
        set: function (doNotStore) {
            this._doNotStore = doNotStore;
            this.setReinitFlag(false);
        },
        enumerable: true,
        configurable: true
    });
    UcWidgetComponent.prototype.ngAfterViewInit = function () {
        this.widget = this.init();
    };
    UcWidgetComponent.prototype.ngAfterViewChecked = function () {
        if (this._reinitRequired) {
            this.reset(this._isClearValue);
        }
    };
    UcWidgetComponent.prototype.reset = function (clearUploads) {
        if (clearUploads === void 0) { clearUploads = false; }
        this.destroy();
        this.widget = this.init(clearUploads);
        this._reinitRequired = false;
        this._isClearValue = false;
    };
    UcWidgetComponent.prototype.clearUploads = function () {
        this._value = null;
        if (this.widget) {
            this.widget.value(null);
        }
    };
    UcWidgetComponent.prototype.openDialog = function () {
        if (this.widget) {
            this.widget.openDialog();
        }
    };
    UcWidgetComponent.prototype.setReinitFlag = function (isClearValue) {
        if (this.widget) {
            this._reinitRequired = true;
            this._isClearValue = isClearValue;
        }
    };
    UcWidgetComponent.prototype.setInputAttr = function (key, value) {
        if (value) {
            this.renderer.setAttribute(this.inputElement, key, value);
        }
    };
    UcWidgetComponent.prototype.initInputElement = function () {
        this.setInputAttr('type', 'hidden');
        this.setInputAttr('data-public-key', this._publicKey);
        this.setInputAttr('data-multiple', this._multiple);
        this.setInputAttr('data-multiple-max', this._multipleMax);
        this.setInputAttr('data-multiple-min', this._multipleMin);
        this.setInputAttr('data-images-only', this._imagesOnly);
        this.setInputAttr('data-preview-step', this._previewStep);
        this.setInputAttr('data-crop', this._crop);
        this.setInputAttr('data-image-shrink', this._imageShrink);
        this.setInputAttr('data-clearable', this._clearable);
        this.setInputAttr('data-tabs', this._tabs);
        this.setInputAttr('data-input-accept-types', this._inputAcceptTypes);
        this.setInputAttr('data-preferred-types', this._preferredTypes);
        this.setInputAttr('data-system-dialog', this._systemDialog);
        this.setInputAttr('data-secure-signature', this._secureSignature);
        this.setInputAttr('data-secure-expire', this._secureExpire);
        this.setInputAttr('data-cdn-base', this._cdnBase);
        this.setInputAttr('data-do-not-store', this._doNotStore);
        if (this._value) {
            this.renderer.setProperty(this.inputElement, 'value', this._value);
        }
    };
    UcWidgetComponent.prototype.init = function (removeUploads) {
        var _this = this;
        if (removeUploads === void 0) { removeUploads = false; }
        this.inputElement = this.renderer.createElement('input');
        this.renderer.appendChild(this.element.nativeElement, this.inputElement);
        if (removeUploads) {
            this.clearUploads();
        }
        this.initInputElement();
        var widget = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.Widget(this.inputElement);
        widget.onUploadComplete(function (fileInfo) {
            _this.onUploadComplete.emit(fileInfo);
            _this._value = fileInfo.uuid;
        });
        widget.onChange(function (selectionPromise) {
            _this.onChange.emit(selectionPromise);
            if (typeof selectionPromise.promise === 'function') {
                selectionPromise.promise()
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
            else {
                selectionPromise
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
        });
        return widget;
    };
    UcWidgetComponent.prototype.destroy = function () {
        var $ = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.jQuery;
        $(this.widget.inputElement.nextSibling).remove();
        $(this.widget.inputElement).clone().appendTo($(this.element.nativeElement));
        $(this.widget.inputElement).remove();
        this.renderer.destroyNode(this.inputElement);
        this.renderer.removeChild(this.element.nativeElement, this.element.nativeElement.children[0]);
        delete this.widget;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-progress'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "onProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('public-key'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "publicKey", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "multiple", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-max'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UcWidgetComponent.prototype, "multipleMax", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-min'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UcWidgetComponent.prototype, "multipleMin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('images-only'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "imagesOnly", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preview-step'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "previewStep", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('crop'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UcWidgetComponent.prototype, "crop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('image-shrink'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "imageShrink", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "clearable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabs'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "tabs", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('input-accept-types'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "inputAcceptTypes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preferred-types'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "preferredTypes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('system-dialog'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "systemDialog", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-signature'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "secureSignature", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-expire'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "secureExpire", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdn-base'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], UcWidgetComponent.prototype, "cdnBase", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('do-not-store'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UcWidgetComponent.prototype, "doNotStore", null);
    UcWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-uploadcare-widget',
            template: '',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], UcWidgetComponent);
    return UcWidgetComponent;
}());



/***/ }),

/***/ "./src/ucWidget/ucWidget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ucWidgetCustom_ucWidgetCustom_component__ = __webpack_require__("./src/ucWidgetCustom/ucWidgetCustom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ucWidgetCustom_ucWidgetCustom_module__ = __webpack_require__("./src/ucWidgetCustom/ucWidgetCustom.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UcWidgetModule = /** @class */ (function () {
    function UcWidgetModule() {
    }
    UcWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__["a" /* UcWidgetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__ucWidgetCustom_ucWidgetCustom_module__["a" /* UcWidgetCustomModule */],
            ],
            providers: [],
            bootstrap: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__["a" /* UcWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ucWidgetCustom_ucWidgetCustom_component__["a" /* UcWidgetCustomComponent */],
            ],
        })
    ], UcWidgetModule);
    return UcWidgetModule;
}());



/***/ }),

/***/ "./src/ucWidgetCustom/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidgetCustom_component__ = __webpack_require__("./src/ucWidgetCustom/ucWidgetCustom.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidgetCustom_component__["a"]; });

// export * from './ucWidgetCustom.module';


/***/ }),

/***/ "./src/ucWidgetCustom/ucWidgetCustom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetCustomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__ = __webpack_require__("uploadcare-widget");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.start({ integration: "Angular/" + __WEBPACK_IMPORTED_MODULE_0__angular_core__["VERSION"].full + "; Ngx-Uploadcare-Widget/" + "1.0.1" });
var UcWidgetCustomComponent = /** @class */ (function () {
    function UcWidgetCustomComponent() {
        this.onUploadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.publicKey = 'demopublickey';
    }
    UcWidgetCustomComponent.prototype.openDialog = function () {
        var _this = this;
        var config = {
            publicKey: this.publicKey ? this.publicKey : undefined,
            multiple: this.multiple,
            multipleMax: this.multipleMax,
            multipleMin: this.multipleMin,
            imagesOnly: this.imagesOnly,
            previewStep: this.previewStep,
            crop: this.crop ? this.crop : undefined,
            imageShrink: this.imageShrink ? this.imageShrink : undefined,
            clearable: this.clearable,
            tabs: this.tabs ? this.tabs : undefined,
            inputAcceptTypes: this.inputAcceptTypes ? this.inputAcceptTypes : undefined,
            preferredTypes: this.preferredTypes,
            systemDialog: this.systemDialog,
            secureSignature: this.secureSignature,
            secureExpire: this.secureExpire,
            value: this.value ? this.value : undefined,
            cdnBase: this.cdnBase ? this.cdnBase : undefined,
            doNotStore: this.doNotStore
        };
        var dialog = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.openDialog(this.value, null, config);
        dialog.done(function (selectionPromise) {
            _this.onChange.emit(selectionPromise);
            if (typeof selectionPromise.promise === 'function') {
                selectionPromise.promise()
                    .then(function (groupInfo) {
                    _this.onUploadComplete.emit(groupInfo);
                })
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
            else {
                selectionPromise
                    .then(function (fileInfo) {
                    _this.onUploadComplete.emit(fileInfo);
                })
                    .progress(function (progress) {
                    _this.onProgress.emit(progress);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onUploadComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-change'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('on-progress'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "onProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('public-key'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "publicKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-max'),
        __metadata("design:type", Number)
    ], UcWidgetCustomComponent.prototype, "multipleMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-min'),
        __metadata("design:type", Number)
    ], UcWidgetCustomComponent.prototype, "multipleMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('images-only'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "imagesOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preview-step'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "previewStep", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('crop'),
        __metadata("design:type", Object)
    ], UcWidgetCustomComponent.prototype, "crop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('image-shrink'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "imageShrink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearable'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "clearable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabs'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('input-accept-types'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "inputAcceptTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preferred-types'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "preferredTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('system-dialog'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "systemDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-signature'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "secureSignature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-expire'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "secureExpire", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdn-base'),
        __metadata("design:type", String)
    ], UcWidgetCustomComponent.prototype, "cdnBase", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('do-not-store'),
        __metadata("design:type", Boolean)
    ], UcWidgetCustomComponent.prototype, "doNotStore", void 0);
    UcWidgetCustomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-uploadcare-widget-custom',
            template: '',
        })
    ], UcWidgetCustomComponent);
    return UcWidgetCustomComponent;
}());



/***/ }),

/***/ "./src/ucWidgetCustom/ucWidgetCustom.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetCustomModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ucWidgetCustom_component__ = __webpack_require__("./src/ucWidgetCustom/ucWidgetCustom.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UcWidgetCustomModule = /** @class */ (function () {
    function UcWidgetCustomModule() {
    }
    UcWidgetCustomModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ucWidgetCustom_component__["a" /* UcWidgetCustomComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ucWidgetCustom_component__["a" /* UcWidgetCustomComponent */]],
        })
    ], UcWidgetCustomModule);
    return UcWidgetCustomModule;
}());



/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ }),

/***/ "uploadcare-widget":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_uploadcare_widget__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map