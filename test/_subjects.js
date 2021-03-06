function subjects() {

  var fn = function(){}
  var exp = (16777216).toExponential()
  var flexp = (1.6777216).toExponential()
  var hex = 0xf

  return {
    'alphaString'                 : "asdf",
    'args'                        : arguments,
    'emptyArray'                  : [],
    'emptyObject'                 : {},
    'emptyString'                 : "",
    'exponent'                    : exp,
    'floatingPointExponent'       : flexp,
    'f'                           : false,
    'fn'                          : fn,
    'hexadecimal'                 : hex,
    'hexadecimalString'           : '0xf',
    'infinity'                    : Infinity,
    'infinityString'              : "Infinity",
    'invalidHexadecimalString'    : '0xg',
    'nan'                         : NaN,
    'negativeExponent'            : -exp,
    'negativeFloatString'         : "-42.01",
    'negativeHexadecimal'         : -hex,
    'negativeHexadecimalString'   : '-0xf',
    'negativeInfinity'            : -Infinity,
    'negativeInfinityString'      : "-Infinity",
    'negativeInteger'             : -42,
    'negativeIntegerString'       : "-42",
    'negativeOne'                 : -1,
    'negativeOneString'           : "-1",
    'negativeZero'                : -0,
    'negativeZeroString'          : "-0",
    'newArray'                    : new Array(),
    'newBooleanFalse'             : new Boolean(false),
    'newBooleanTrue'              : new Boolean(true),
    'newDate'                     : new Date(),
    'newObject'                   : new Object(),
    'newRegExp'                   : new RegExp("^foo"),
    'newString'                   : new String('foo'),
    'nil'                         : null,
    'objectCreateNull'            : Object.create(null),
    'objectCreateObjectPrototype' : Object.create(Object.prototype),
    'objectLengthOne'             : {length:1},
    'plainArray'                  : ["foo", "bar"],
    'plainObject'                 : {foo:"bar"},
    'positiveExponent'            : +exp,
    'positiveFloat'               : 3.14,
    'positiveFloatString'         : "3.14",
    'positiveHexadecimal'         : +hex,
    'positiveHexadecimalString'   : '+0xf',
    'positiveInfinity'            : +Infinity,
    'positiveInfinityString'      : "+Infinity",
    'positiveInteger'             : 16,
    'positiveIntegerString'       : "16",
    'positiveZero'                : +0,
    'positiveZeroString'          : "+0",
    'regex'                       : /^foo/,
    'rxString'                    : "^foo",
    't'                           : true,
    'undef'                       : undefined,
    'whiteSpaceString'            : "  ",
    'zero'                        : 0,
    'zeroString'                  : "0",
  }

}

module.exports = subjects()
