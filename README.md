<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/ivansnek/ngx-overflow-marquee/master/demo/src/assets/logo.svg">
</p>

# ngx-overflow-marquee - Creates a marquee efect when content overflows

[![npm version](https://badge.fury.io/js/ngx-overflow-marquee.svg)](https://badge.fury.io/js/ngx-overflow-marquee),
[![Build Status](https://travis-ci.org/ivansnek/ngx-overflow-marquee.svg?branch=master)](https://travis-ci.org/ivansnek/ngx-overflow-marquee)
[![Coverage Status](https://coveralls.io/repos/github/ivansnek/ngx-overflow-marquee/badge.svg?branch=master)](https://coveralls.io/github/ivansnek/ngx-overflow-marquee?branch=master)
[![dependency Status](https://david-dm.org/ivansnek/ngx-overflow-marquee/status.svg)](https://david-dm.org/ivansnek/ngx-overflow-marquee)
[![devDependency Status](https://david-dm.org/ivansnek/ngx-overflow-marquee/dev-status.svg?branch=master)](https://david-dm.org/ivansnek/ngx-overflow-marquee#info=devDependencies)

## Demo

View all the directives in action at https://ivansnek.github.io/ngx-overflow-marquee

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-overflow-marquee` via:
```shell
npm install --save ngx-overflow-marquee
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-overflow-marquee`:
```js
map: {
  'ngx-overflow-marquee': 'node_modules/ngx-overflow-marquee/bundles/ngx-overflow-marquee.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-overflow-marquee';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-overflow-marquee';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-overflow-marquee';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Ivan Eusebio. Licensed under the MIT License (MIT)

