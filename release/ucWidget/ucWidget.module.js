var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UcWidgetComponent } from './ucWidget.component';
import { UcWidgetCustomComponent } from '../ucWidgetCustom/ucWidgetCustom.component';
import { UcWidgetCustomModule } from '../ucWidgetCustom/ucWidgetCustom.module';
var UcWidgetModule = /** @class */ (function () {
    function UcWidgetModule() {
    }
    UcWidgetModule = __decorate([
        NgModule({
            declarations: [
                UcWidgetComponent
            ],
            imports: [
                BrowserModule,
                UcWidgetCustomModule,
            ],
            providers: [],
            bootstrap: [],
            exports: [
                UcWidgetComponent,
                UcWidgetCustomComponent,
            ],
        })
    ], UcWidgetModule);
    return UcWidgetModule;
}());
export { UcWidgetModule };
//# sourceMappingURL=ucWidget.module.js.map