# v8-promise-module

[![Build Status](https://travis-ci.org/pH200/v8-promise-module.svg)](https://travis-ci.org/pH200/v8-promise-module)

**v8-promise-module** is a Promise polyfill for JS, adapted from V8 source code.
It passes [Promise A+ tests](https://github.com/promises-aplus/promises-tests)
on all major browsers and Node.

## Usage

```
npm install v8-promise-module
```

```js
var Promise = require('v8-promise-module');
```

## v8-promise

v8-promise-module is a fork of [v8-promise]. v8-promise-module is a CommonJS
module instead of a polyfill script that injects Promise to global when
Promise is not defined on global.

[v8-promise]: https://github.com/zenparsing/v8-promise
