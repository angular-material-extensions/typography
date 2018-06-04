<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/text/master/demo/src/assets/logo.svg">
</p>

# text - Set of angular directives to allow typography manipulation

[![npm version](https://badge.fury.io/js/text.svg)](https://badge.fury.io/js/text),
[![Build Status](https://travis-ci.org/angular-material-extensions/text.svg?branch=master)](https://travis-ci.org/angular-material-extensions/text)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/text/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/text?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/text/status.svg)](https://david-dm.org/angular-material-extensions/text)
[![devDependency Status](https://david-dm.org/angular-material-extensions/text/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/text#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/text.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/text

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/typography` via:
```shell
npm install --save @angular-material-extensions/typography
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/typography`:
```js
map: {
  '@angular-material-extensions/typography': 'node_modules/@angular-material-extensions/typography/bundles/text.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatTextModule } from '@angular-material-extensions/typography';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatTextModule .forRoot()`):
```js
import { MatTextModule } from '@angular-material-extensions/typography';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatTextModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatTextModule `:

```js
import { MatTextModule } from '@angular-material-extensions/typography';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatTextModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

