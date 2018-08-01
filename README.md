# ps-util-is
This module copies functionality of **core-util-is v1.0.2** for ExtendScript.

## Installation

```npm i ps-util-is```

## Usage
* As a module for scripts that uses [this](https://github.com/EugenTepin/ps-app-tempalte) template:

```javascript
var util = require('ps-util-is');
```
* As a module for scripts that uses ```#include```:

```javascript
#include "{path_to_bundle}/ps-util-is.jsx"
var util = require(ps-util-is);
```

## typeof 
The behavior of the typeof operator in ExtendScript differs from node.js:
```javascript
// ExtendScript
var re = /a*/gim;
$.writeln(typeof re); // function !!!
//Node
var re = /a*/gim;
console.log(typeof re); // object
```
This module takes core-util-is as "source of truth", so:
```javascript
// ExtendScript
var re = /a*/gim;
$.writeln(isObject(re)); // true
$.writeln(isRegExp(re)); // true
$.writeln(isFunction(re)); // false
```
## isArray
This module will search for **Array.isArray()** polyfill. For example, [ps-scripting-es5shim](https://github.com/EugenTepin/ps-scripting-es5shim) relies on **__class\_\_** property, and code in this repo relies on **Object.prototype.toString**

## Results of core-util-is v1.0.2
__Code__ | isArray | isBoolean | isDate | isError | isFunction | isNull | isNullOrUndefined | isNumber | isObject | isPrimitive | isRegExp | isString | isUndefined
---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------
__10__ | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false
__new Number(10)__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__overconfidence__ | false | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false
__new String('overconfidence')__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__false__ | false | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false
__new Boolean(false)__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__undefined__ | false | false | false | false | false | false | __TRUE__ | false | false | __TRUE__ | false | false | __TRUE__
__null__ | false | false | false | false | false | __TRUE__ | __TRUE__ | false | false | __TRUE__ | false | false | false
__NaN__ | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false
__[1,2,3]__ | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__new Array(1,2,3)__ | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__/a*/gim__ | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false
__new RegExp('a*' , 'gim')__ | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false
__new Date(2029,1,1)__ | false | false | __TRUE__ | false | false | false | false | false | __TRUE__ | false | false | false | false
__{prop: 12345}__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__new Object({prop: 12345})__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__function(x){return x;}__ | false | false | false | false | __TRUE__ | false | false | false | false | false | false | false | false
__new Function('x','return x;')__ | false | false | false | false | __TRUE__ | false | false | false | false | false | false | false | false
__new Error('something bad happened')__ | false | false | false | __TRUE__ | false | false | false | false | __TRUE__ | false | false | false | false

## Results of ps-util-is

__Code__ | __isArray__ | __isBoolean__ | __isDate__ | __isError__ | __isFunction__ | __isNull__ | __isNullOrUndefined__ | __isNumber__ | __isObject__ | __isPrimitive__ | __isRegExp__ | __isString__ | __isSymbol__ | __isUndefined__
---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------
__10__ | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false | false
__new Number(10)__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__overconfidence__ | false | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false
__new String('overconfidence')__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__false__ | false | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false
__new Boolean(false)__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__undefined__ | false | false | false | false | false | false | __TRUE__ | false | false | __TRUE__ | false | false | false | __TRUE__
__null__ | false | false | false | false | false | __TRUE__ | __TRUE__ | false | false | __TRUE__ | false | false | false | false
__NaN__ | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false | false
__[1,2,3]__ | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__new Array(1,2,3)__ | __TRUE__ | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__/a*/gim__ | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false
__new RegExp('a*' , 'gim')__ | false | false | false | false | false | false | false | false | __TRUE__ | false | __TRUE__ | false | false | false
__new Date(2029,1,1)__ | false | false | __TRUE__ | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__{prop: 12345}__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__new Object({prop: 12345})__ | false | false | false | false | false | false | false | false | __TRUE__ | false | false | false | false | false
__function(x){return x;}__ | false | false | false | false | __TRUE__ | false | false | false | false | false | false | false | false | false
__new Function('x','return x;')__ | false | false | false | false | __TRUE__ | false | false | false | false | false | false | false | false | false
__new Error('something bad happened')__ | false | false | false | __TRUE__ | false | false | false | false | __TRUE__ | false | false | false | false | false

## Tests

Tests will be kept only in github repo.
If you want to test on another dataset do the following steps:

1) Get files from this repo, then ```npm install```
2) **./test/data/test_data.js** change data as you need.
3) **[OPTIONAL]** ```nmp run watch``` just in case (rebuild bundles).
4) run **./build/test_bundle.jsx** in **ESTK**, or in target app. This will rewrite **./test/data/ps-util-is-result.js**
5) ```npm test``` see test results in console