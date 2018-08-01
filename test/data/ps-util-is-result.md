__RowName__ | __isArray__ | __isBoolean__ | __isDate__ | __isError__ | __isFunction__ | __isNull__ | __isNullOrUndefined__ | __isNumber__ | __isObject__ | __isPrimitive__ | __isRegExp__ | __isString__ | __isSymbol__ | __isUndefined__
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