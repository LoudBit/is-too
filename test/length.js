var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var skippers = [
'objectCreateNull',
'nil',
'undef'
]

var longerThanNothing = [
  'alphaString',
  'exponent',
  'floatingPointExponent',
  'hexadecimalString',
  'infinityString',
  'invalidHexadecimalString',
  'negativeFloatString',
  'negativeHexadecimalString',
  'negativeInfinityString',
  'negativeIntegerString',
  'negativeOneString',
  'negativeZeroString',
  'newString',
  'objectLengthOne',
  'objectLengthOne',
  'plainArray',
  'positiveFloatString',
  'positiveHexadecimalString',
  'positiveInfinityString',
  'positiveIntegerString',
  'positiveZeroString',
  'rxString',
  'whiteSpaceString',
  'zeroString'
]

var longerThanOne = [
  'exponent',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'newDate',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
]

var longerThanNegativeOne = [
  'emptyArray',
  'emptyString',
  'exponent',
  'f',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'nil',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZero',
  'positiveZeroString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString'
]

var longerThanOrEqualToNothing = [
  'emptyArray',
  'emptyString',
  'exponent',
  'f',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'nil',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZero',
  'positiveZeroString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString',
  'zeroString',
]


describe('is.longerThan', function(){

  it('nothing', function(){
    asserts.is('longerThan', longerThanNothing, skippers)
  })

  // it('negative one `-1`', function(){
  //   asserts.standard('longerThan', longerThanNegativeOne, -1, skippers)
  // })

  // it('one `1`', function(){
  //   asserts.standard('longerThan', longerThanOne, 1, skippers)
  // })

  // it('not.longerThan nothing', function(){
  //   asserts.not('longerThan', longerThanNothing, skippers)
  // })

})


describe('is.longerThanOrEqualTo', function(){

  // it('nothing', function(){
  //   asserts.is('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  // })

  // it('not.longerThanOrEqualTo', function(){
  //   asserts.not('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  // })

})
