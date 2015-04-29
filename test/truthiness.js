var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')
var subjects = require('./_subjects')

var isTrue = ['t']
var isTruthy = [
  'alphaString',
  'args',
  'emptyArray',
  'emptyObject',
  'exponent',
  'floatingPointExponent',
  'fn',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'invalidHexadecimalString',
  'negativeExponent',
  'negativeFloatString',
  'negativeHexadecimal',
  'negativeHexadecimalString',
  'negativeInfinity',
  'negativeInfinityString',
  'negativeInteger',
  'negativeIntegerString',
  'negativeOne',
  'negativeOneString',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'newObject',
  'newRegExp',
  'newString',
  'objectCreateObjectPrototype',
  'objectLengthOne',
  'plainArray',
  'plainObject',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveHexadecimalString',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZeroString',
  'regex',
  'rxString',
  't',
  'whiteSpaceString',
  'zeroString'
]

var isFalse = ['f']
var isFalsy = [
  'emptyString',
  'f',
  'nan',
  'negativeZero',
  'nil',
  'positiveZero',
  'undef',
  'zero',
]

describe('truthiness', function(){

  it('is.true', function() {
    asserts.is('true', isTrue, ['objectCreateNull'])
  })

  it('is.truthy', function(){
    asserts.is('truthy', isTruthy, ['objectCreateNull'])
  })

  it('is.false', function() {
    asserts.is('false', isFalse, ['objectCreateNull'])
  })

  it('is.falsy', function(){
    asserts.is('falsy', isFalsy, ['objectCreateNull'])
  })

})
