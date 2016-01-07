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

var longerThanOrEqualToNothing = [
  'alphaString',
  'args',
  'emptyArray',
  'emptyString',
  'exponent',
  'floatingPointExponent',
  'fn',
  'hexadecimalString',
  'infinityString',
  'invalidHexadecimalString',
  'negativeFloatString',
  'negativeHexadecimalString',
  'negativeInfinityString',
  'negativeIntegerString',
  'negativeOneString',
  'negativeZeroString',
  'newArray',
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

var longerThanOrEqualToOne = [
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

var shorterThanNothing = [] // that's right!

var shorterThanOne = [
  'args',
  'emptyArray',
  'emptyString',
  'fn',
  'newArray'
]

var shorterThanOrEqualToNothing = [
  'args',
  'emptyArray',
  'emptyString',
  'fn',
  'newArray'
]

var shorterThanOrEqualToOne = [
  'args',
  'emptyArray',
  'emptyString',
  'fn',
  'newArray',
  'objectLengthOne',
  'zeroString'
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

  it('is.longerThan([\'foo\'], 0) passes', function(){
    assert(is.longerThan(['foo'], 0))
  })

  it('is.not.longerThan([\'foo\'], 1) passes', function(){
    assert(is.not.longerThan(['foo'], 1))
  })

})


describe('is.longerThanOrEqualTo', function(){

  it('nothing', function(){
    asserts.is('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  })

  it('one `1`', function(){
    asserts.standard('longerThanOrEqualTo', longerThanOrEqualToOne, 1, skippers)
  })

  it('not.longerThan nothing', function(){
    asserts.not('longerThanOrEqualTo', longerThanOrEqualToNothing, skippers)
  })

})



describe('is.shorterThan', function(){

  it('nothing', function(){
    asserts.is('shorterThan', shorterThanNothing, skippers)
  })

  it('one `1`', function(){
    asserts.standard('shorterThan', shorterThanOne, 1, skippers)
  })

  it('not.shorterThan nothing', function(){
    asserts.not('shorterThan', shorterThanNothing, skippers)
  })

  it('is.not.shorterThan([\'foo\'], 1) passes', function(){
    assert(is.not.shorterThan(['foo'], 1))
  })

  it('is.not.shorterThan([\'foo\'], 1) passes', function(){
    assert(is.not.shorterThan(['foo'], 1))
  })

  it('is.not.shorterThan([\'foo\'], 0) passes', function(){
    assert(is.not.shorterThan(['foo'], 0))
  })

})


describe('is.shorterThanOrEqualTo', function(){

  it('nothing', function(){
    asserts.is('shorterThanOrEqualTo', shorterThanOrEqualToNothing, skippers)
  })

  it('one `1`', function(){
    asserts.standard('shorterThanOrEqualTo', shorterThanOrEqualToOne, 1, skippers)
  })

  it('not.shorterThan nothing', function(){
    asserts.not('shorterThanOrEqualTo', shorterThanOrEqualToNothing, skippers)
  })

})

describe('is.lengthy', function () {
  it('is.lengthy is an alias of is.longerThan(0)', function() {
    assert( is.lengthy('foo') )
    asserts.is('lengthy', longerThanNothing, skippers)
  })
})
