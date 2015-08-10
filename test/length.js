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
  'plainArray',
  'positiveFloatString',
  'positiveHexadecimalString',
  'positiveInfinityString',
  'positiveIntegerString',
  'positiveZeroString',
  'rxString',
  'whiteSpaceString'
]


describe('is.longerThan', function(){

  it('nothing', function(){
    asserts.is('longerThan', longerThanNothing, skippers)
  })

  it('one `1`', function(){
    asserts.standard('longerThan', longerThanOne, 1, skippers)
  })

  it('not.longerThan nothing', function(){
    asserts.not('longerThan', longerThanNothing, skippers)
  })

})


describe('is.longerThanOrEqualTo', function(){

  // it('nothing', function(){
  //   asserts.is('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  // })

  // it('not.longerThanOrEqualTo', function(){
  //   asserts.not('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  // })

})
