# ngx-uploadcare-widget

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget">
  <img align="right" width="64" height="64"
       src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
       alt="">
</a>

Angular 2+ wrapper for [Uploadcare Widget][widget].

[![NPM version][npm-img]][npm-link] [![Build Status][travis-img]][travis] [![Uploadcare stack on StackShare][stack-img]][stack]

[npm-img]: http://img.shields.io/npm/v/ngx-uploadcare-widget.svg
[npm-link]: https://www.npmjs.org/package/ngx-uploadcare-widget
[travis-img]: https://api.travis-ci.org/uploadcare/ngx-uploadcare-widget.svg?branch=master
[travis]: https://travis-ci.org/uploadcare/ngx-uploadcare-widget
[stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stack]: https://stackshare.io/uploadcare/stacks/

Uploadcare Widget is an HTML5 file uploader
which itself is a part of [Uploadcare][uploadcare] ecosystem.

## Install

```
npm install ngx-uploadcare-widget
```

## Usage

Import the component,

```typescript
import { UcWidgetComponent } from 'ngx-uploadcare-widget';
```

Add the component to your module,

```typescript
@NgModule({
  declarations: [
    ...,
    UcWidgetComponent,
  ],
  ...
})
...
```

Use it in your template,

```html
<ngx-uploadcare-widget
  images-only="true"
  public-key="YOUR_PUBLIC_KEY">
</ngx-uploadcare-widget>
```

The component support two widget events:
 `on-change` and `on-upload-complete`, you can handle its as on example below,
 
```html
<ngx-uploadcare-widget
  images-only="true"
  public-key="demopublickey"
  (on-upload-complete)="yourOnUploadHandler($event)"
  (on-change)="yourOnChangeHandler($event)">
</ngx-uploadcare-widget>
```

You can read more about this events in [docs][docs-widget-js-change].
 
## Configuration


### Supported input attributes

Every attribute corresponds its name described in [widget docs][docs-widget-config]
but without `data-` prefix.

* [public-key](https://uploadcare.com/docs/uploads/widget/config/#option-public-key)
* [multiple](https://uploadcare.com/docs/uploads/widget/config/#option-multiple)
* [multiple-max](https://uploadcare.com/docs/uploads/widget/config/#option-multiple-max)
* [multiple-min](https://uploadcare.com/docs/uploads/widget/config/#option-multiple-min)
* [images-only](https://uploadcare.com/docs/uploads/widget/config/#option-images-only)
* [preview-step](https://uploadcare.com/docs/uploads/widget/config/#option-preview-step)
* [crop](https://uploadcare.com/docs/uploads/widget/config/#option-crop)
* [image-shrink](https://uploadcare.com/docs/uploads/widget/config/#option-image-shrink)
* [clearable](https://uploadcare.com/docs/uploads/widget/config/#option-clearable)
* [tabs](https://uploadcare.com/docs/uploads/widget/config/#option-tabs)
* [input-accept-types](https://uploadcare.com/docs/uploads/widget/config/#option-input-accept-types)
* [preferred-types](https://uploadcare.com/docs/uploads/widget/config/#option-preferred-types)
* [system-dialog](https://uploadcare.com/docs/uploads/widget/config/#option-system-dialog)
* [secure-signature](https://uploadcare.com/docs/uploads/widget/config/#option-secure-signature)
* [secure-expire](https://uploadcare.com/docs/uploads/widget/config/#option-secure-expire)
* [value](https://uploadcare.com/documentation/widget/v2/#input-value)
* [cdn-base](https://uploadcare.com/docs/uploads/widget/config/#option-cdn-base)
* [do-not-store](https://uploadcare.com/docs/uploads/widget/config/#option-do-not-store)

### Events

* [on-upload-complete](https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-upload-complete)
* [on-change](https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-change)

Events usage sample:
```javascript
  onUpload(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
  }
  onChange(info) {
    if(!info) { // could be null if cleared current upload
      return;
    }
    console.log('fired Event "onChange"');
    console.log(info);
//  info contains 2 methods:
//  .promise() - returns the general promise for all uploadin files which resolves with the group info of uploaded files
//  .files() - returns the array of promises for each uploading file. Each promise resolves with uploaded file info
    if(info.promise) {
      info.promise().then((groupInfo) => {
        console.log('resolved general promise from "onChange" with data:');
        console.log(groupInfo);
      });
    }
    if(info.files) {
      info.files().forEach((promise) => {
        promise.then((fileInfo) => {
          console.log('resolves file promise with file info:');
          console.log(fileInfo);
        });
      });
    }
  }
```
### Mechods

Component provides 2 public methods:
* `clearUploads()` - Removes the current uploads of widget. You can use this method to reset your form even user alredy did upload some files.
* `reset(clearUploads = false)` - Resets the widget, You can also remove current uploads if `clearUploads` set to `true`

All methods could be accessible via `@ViewChild()` approach from parent component.

## Localization

It’s possible that your locale is not available in the widget yet.
If that’s the case, contributing your locale might be a good idea.
This can be done by forking the [main repository][widget]
and adding a localization file
[here][widget-locales].

Until that you can use [`UPLOADCARE_LOCALE_TRANSLATIONS`][docs-widget-locales] property
to use your locale immediately.

[widget]: https://github.com/uploadcare/uploadcare-widget
[uploadcare]: https://uploadcare.com/?utm_source=github&utm_campaign=ngx-uploadcare-widget
[widget-locales]: https://github.com/uploadcare/uploadcare-widget/tree/master/app/assets/javascripts/uploadcare/locale
[docs-widget-locales]: https://uploadcare.com/docs/uploads/widget/locales/
[docs-widget-js-change]: https://uploadcare.com/docs/api_reference/javascript/widget/#widget-on-change
[docs-widget-config]: https://uploadcare.com/docs/uploads/widget/config/
