var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')
var subjects = require('./_subjects')

var unequals = [
  'alphaString',
  'args',
  'emptyArray',
  'emptyObject',
  'emptyString',
  'exponent',
  'floatingPointExponent',
  'f',
  'fn',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'invalidHexadecimalString',
  'nan',
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
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'newObject',
  'newRegExp',
  'newString',
  'objectCreateNull',
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
  'positiveZero',
  'positiveZeroString',
  'regex',
  'rxString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString'
]
var notExactlies = [
  'alphaString',
  'args',
  'emptyArray',
  'emptyObject',
  'emptyString',
  'exponent',
  'floatingPointExponent',
  'f',
  'fn',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'invalidHexadecimalString',
  'nan',
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
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'newObject',
  'newRegExp',
  'newString',
  'nil',
  'objectCreateNull',
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
  'positiveZero',
  'positiveZeroString',
  'regex',
  'rxString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString'
]

describe('inequality', function(){

  it('is.unequal', function() {
    asserts.is('unequal', unequals)
    assert(is.unequal(subjects.negativeExponent, subjects.positiveExponent))
  })

  it('is.not.unequal', function(){
    // don't ever actually do this, double negatives are dumb in code too.
    assert(is.not.unequal(subjects.negativeZero, subjects.zero))
    assert(is.not.unequal(subjects.negativeZero, subjects.positiveZero))
  })

  it('is.notExactly', function(){
    asserts.is('notExactly', notExactlies)
    assert(is.notExactly(subjects.negativeExponent, subjects.positiveExponent))
  })

  it('is.not.notExactly', function(){
    assert(is.not.notExactly(1, 1))
    assert(is.not.notExactly(subjects.negativeZero, subjects.positiveZero))
  })

})
