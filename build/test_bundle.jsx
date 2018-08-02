(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return isNull(arg) || isUndefined(arg);
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

// In ExtendScript typeof RegExp is function so we need to use __class__ property
function isRegExp(re) {
    return !isNullOrUndefined(re) && re.__class__ === 'RegExp';
}
exports.isRegExp = isRegExp;

// In ExtendScript typeof RegExp is function
function isObject(arg) {
  return typeof arg === 'object' && arg !== null || isRegExp(arg);
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

// In ExtendScript type of RegExp is function so we need to use __class__ property
function isFunction(arg) {
    return !isNullOrUndefined(arg) && arg.__class__ === 'Function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
},{}],2:[function(require,module,exports){
var data = require('./test/data/test_data.js');
var util = require('./');
var rootFolderPath = (new File($.fileName)).parent.parent.absoluteURI;
var resultFile = new File(rootFolderPath + '/test/data/ps-util-is-result.js');
var tableFile = new File(rootFolderPath + '/test/data/ps-util-is-result.md');
var resultObj = {};

for(var i=0; i < data.length; i++){
    var elem = data[i];
    resultObj[elem.code.toString()] = {};
    for(var method in util){
        resultObj[elem.code][method] = util[method](elem.value);
    }
}

var result = 'module.exports = ' + resultObj.toSource();
resultFile.open('w');
resultFile.writeln(result);
resultFile.close();


/*======================= Generates MD table with results ======================================*/
function makeMarkDownTable(objOfObjects, headers) {
    var result = [];
    var rowNames = [];
    for(var rowName in objOfObjects){
        rowNames.push(rowName);
    }
    
    var delim = '----------';
    var defaultHeaders = [];
    var secondRow = [delim];
    for(var header in objOfObjects[rowNames[0]]){
        defaultHeaders.push(header);
        secondRow.push(delim);
    }
    var headers = headers || defaultHeaders.sort();
    var firstRow = ([]).concat('__Code', headers);
    result.push(firstRow.join('__ | __') + '__');
    result.push(secondRow.join(' | '));

    for(var i =0; i < rowNames.length; i++){
        var tmp = [];
        var rowName = rowNames[i];
        tmp.push('__' + rowName + '__');
        var row = objOfObjects[rowName];
        for(var j=0; j < headers.length; j++){
            var value = row[headers[j]];
            if(value){
                tmp.push('__'+ value.toString().toUpperCase() + '__');
            }else{
                tmp.push(value);    
            }
            
        }
        result.push(tmp.join(' | '));
    }
    return result.join('\n');
}

tableFile.open('w');
tableFile.write(makeMarkDownTable(resultObj));
tableFile.close();

},{"./":1,"./test/data/test_data.js":3}],3:[function(require,module,exports){
module.exports = [
    { value: 0, code: "0" },
    { value: new Number(10), code: "new Number(10)" },
    { value: '', code: "" },
    { value: new String('overconfidence'), code: "new String('overconfidence')" },
    { value: false, code: "false" },
    { value: new Boolean(false), code: "new Boolean(false)" },
    { value: undefined, code: "undefined" },
    { value: null, code: "null" },
    { value: NaN, code: "NaN" },
    { value: [1, 2, 3], code: "[1,2,3]" },
    { value: new Array(1, 2, 3), code: "new Array(1,2,3)" },
    { value: /a*/gim, code: "/a*/gim" },
    { value: new RegExp('a*', 'gim'), code: "new RegExp('a*' , 'gim')" },
    { value: new Date(2029, 1, 1), code: "new Date(2029,1,1)" },
    { value: { prop: 12345 }, code: "{prop: 12345}" },
    { value: new Object({ prop: 12345 }), code: "new Object({prop: 12345})" },
    { value: function(x) { return x; }, code: "function(x){return x;}" },
    { value: new Function('x', 'return x;'), code: "new Function('x','return x;')" },
    { value: new Error('something bad happened'), code: "new Error('something bad happened')" }
];
},{}]},{},[2]);
