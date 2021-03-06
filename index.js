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