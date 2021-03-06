# engine-assemble [![NPM version](https://badge.fury.io/js/engine-assemble.svg)](http://badge.fury.io/js/engine-assemble)  [![Build Status](https://travis-ci.org/doowb/engine-assemble.svg)](https://travis-ci.org/doowb/engine-assemble) 

> Handlebars engine, consolidate.js style but with enhancements and default helpers. Should work with Assemble, Verb, express.js, engine-cache or any application that supports consolidate.js conventions.

Wrapper around [engine-handlebars] and [handlebars-helpers] to provide a default template engine for [Assemble].

## Install with [npm](npmjs.org)

```bash
npm i engine-assemble --save
```

## Usage

```js
var engine = require('engine-assemble');
```

## API
### [.compile](./index.js#L51)

Handlebars compile support. Compile the given `str`, register helpers and partials from settings and return a function.

* `str` **{String}**    
* `settings` **{Object}**: object containing optional helpers and partials    
* `returns` **{Function}**: Compiled template function  

```js
var engine = require('engine-assemble');
var fn = engine.compile('{{name}}', {});
```

### [.render](./index.js#L76)

Handlebars string support. Render the given `str` and invoke the callback `cb(err, str)`.

* `str` **{String}**    
* `options` **{Object|Function}**: or callback.    
* `cb` **{Function}**: callback function.    

```js
var engine = require('engine-assemble');
engine.render('{{name}}', {name: 'Jon'}, function (err, content) {
  console.log(content); //=> 'Jon'
});
```

### [.renderSync](./index.js#L99)

Handlebars sync support. Synchronously render Handlebars templates.

* `str` **{Object}**: The string to render.    
* `options` **{Object}**: Object of options.    
* `returns` **{String}**: Rendered string.  

```js
var engine = require('engine-assemble');
engine.renderSync('<%= name %>', {name: 'Jon'});
//=> 'Jon'
```

### [.renderFile](./index.js#L121)

Handlebars file support. Render a file at the given `filepath` and callback `cb(err, str)`.

* `filepath` **{String}**    
* `options` **{Object|Function}**: or callback function.    
* `cb` **{Function}**: callback function    

```js
var engine = require('engine-assemble');
engine.renderSync('foo/bar/baz.tmpl', {name: 'Jon'});
//=> 'Jon'
```


## Author

**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 

## License
Copyright (c) 2015 Brian Woodward  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 12, 2015._

[delims]: https://github.com/jonschlinkert/delims "template delimiters"
[engine-handlebars]: https://github.com/jonschlinkert/engine-handlebars
[handlebars-helpers]: https://github.com/assemble/handlebars-helpers
[Assemble]: http://assemble.io