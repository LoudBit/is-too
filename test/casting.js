var assert = require('assert')
var is = require('../lib/is')

describe('casting methods', function(){

  it('toInteger', function(){
    var fn = function(){}

    // these actually become NaN which is a bitch to test, so: true == !NaN
    assert.equal(true,  !is.toInteger(fn))
    assert.equal(true,  !is.toInteger(new Date))
    assert.equal(true,  !is.toInteger(undefined))
    assert.equal(true,  !is.toInteger(NaN))
    assert.equal(true,  !is.toInteger(null))
    assert.equal(true,  !is.toInteger(true))
    assert.equal(true,  !is.toInteger(false))
    assert.equal(true,  !is.toInteger({}))
    assert.equal(true,  !is.toInteger([]))
    assert.equal(true,  !is.toInteger(""))
    assert.equal(true,  !is.toInteger("   "))
    assert.equal(true,  !is.toInteger("asdf"))

    // actual numbers
    assert.equal(1,   is.toInteger("1.23"))
    assert.equal(-42, is.toInteger("-42"))
    assert.equal(-1,  is.toInteger("-1"))
    assert.equal(0,   is.toInteger("0"))
    assert.equal(666, is.toInteger("666"))
    assert.equal(1,   is.toInteger(1.23))
    assert.equal(-42, is.toInteger(-42))
    assert.equal(-1,  is.toInteger(-1))
    assert.equal(0,   is.toInteger(0))
    assert.equal(666, is.toInteger(666))
  })

  it('toPositiveInteger', function(){
    var fn = function(){}
    assert.equal(false, is.aPositiveInteger(fn))
    assert.equal(false, is.aPositiveInteger(new Date))
    assert.equal(false, is.aPositiveInteger(undefined))
    assert.equal(false, is.aPositiveInteger(NaN))
    assert.equal(false, is.aPositiveInteger(null))
    assert.equal(false, is.aPositiveInteger(true))
    assert.equal(false, is.aPositiveInteger(false))
    assert.equal(false, is.aPositiveInteger({}))
    assert.equal(false, is.aPositiveInteger([]))
    assert.equal(false, is.aPositiveInteger(""))
    assert.equal(false, is.aPositiveInteger("  "))
    assert.equal(false, is.aPositiveInteger("asdf"))
    assert.equal(false, is.aPositiveInteger("1.23"))
    assert.equal(false, is.aPositiveInteger("-42"))
    assert.equal(false, is.aPositiveInteger("-1"))
    assert.equal(false, is.aPositiveInteger("0"))
    assert.equal(true,  is.aPositiveInteger("666"))
    assert.equal(false, is.aPositiveInteger(1.23))
    assert.equal(false, is.aPositiveInteger(-42))
    assert.equal(false, is.aPositiveInteger(-1))
    assert.equal(false, is.aPositiveInteger(0))
    assert.equal(true,  is.aPositiveInteger(666))
  })

  it('toNegativeInteger', function(){
    var fn = function(){}
    assert.equal(false, is.aNegativeInteger(fn))
    assert.equal(false, is.aNegativeInteger(new Date))
    assert.equal(false, is.aNegativeInteger(undefined))
    assert.equal(false, is.aNegativeInteger(NaN))
    assert.equal(false, is.aNegativeInteger(null))
    assert.equal(false, is.aNegativeInteger(true))
    assert.equal(false, is.aNegativeInteger(false))
    assert.equal(false, is.aNegativeInteger({}))
    assert.equal(false, is.aNegativeInteger([]))
    assert.equal(false, is.aNegativeInteger(""))
    assert.equal(false, is.aNegativeInteger("  "))
    assert.equal(false, is.aNegativeInteger("asdf"))
    assert.equal(false, is.aNegativeInteger("1.23"))
    assert.equal(true,  is.aNegativeInteger("-42"))
    assert.equal(true,  is.aNegativeInteger("-1"))
    assert.equal(false, is.aNegativeInteger("0"))
    assert.equal(false, is.aNegativeInteger("666"))
    assert.equal(false, is.aNegativeInteger(1.23))
    assert.equal(true,  is.aNegativeInteger(-42))
    assert.equal(true,  is.aNegativeInteger(-1))
    assert.equal(false, is.aNegativeInteger(0))
    assert.equal(false, is.aNegativeInteger(666))
  })

  it('toPosInt plus attr', function(){
    var fn = function(){}
    assert.equal(false, is.aPosInt(fn, 2))
    assert.equal(false, is.aPosInt(new Date, 2))
    assert.equal(false, is.aPosInt(undefined, 2))
    assert.equal(false, is.aPosInt(NaN, 2))
    assert.equal(false, is.aPosInt(null, 2))
    assert.equal(false, is.aPosInt(true, 2))
    assert.equal(false, is.aPosInt(false, 2))
    assert.equal(false, is.aPosInt({}, 2))
    assert.equal(false, is.aPosInt([], 2))
    assert.equal(false, is.aPosInt("", 2))
    assert.equal(false, is.aPosInt("  ", 2))
    assert.equal(false, is.aPosInt("asdf", 2))
    assert.equal(false, is.aPosInt("1.23", 2))
    assert.equal(false, is.aPosInt("-42", 2))
    assert.equal(false, is.aPosInt("-1", 2))
    assert.equal(false, is.aPosInt("0", 2))
    assert.equal(true,  is.aPosInt("666", 2))
    assert.equal(false, is.aPosInt(1.23, 2))
    assert.equal(false, is.aPosInt(-42, 2))
    assert.equal(false, is.aPosInt(-1, 2))
    assert.equal(false, is.aPosInt(0, 2))
    assert.equal(true,  is.aPosInt(666, 2))
  })

  it('toNegInt plus attr', function(){
    var fn = function(){}
    assert.equal(false, is.aNegInt(fn, -2))
    assert.equal(false, is.aNegInt(new Date, -2))
    assert.equal(false, is.aNegInt(undefined, -2))
    assert.equal(false, is.aNegInt(NaN, -2))
    assert.equal(false, is.aNegInt(null, -2))
    assert.equal(false, is.aNegInt(true, -2))
    assert.equal(false, is.aNegInt(false, -2))
    assert.equal(false, is.aNegInt({}, -2))
    assert.equal(false, is.aNegInt([], -2))
    assert.equal(false, is.aNegInt("", -2))
    assert.equal(false, is.aNegInt("  ", -2))
    assert.equal(false, is.aNegInt("asdf", -2))
    assert.equal(false, is.aNegInt("1.23", -2))
    assert.equal(true,  is.aNegInt("-42", -2))
    assert.equal(false, is.aNegInt("-1", -2))
    assert.equal(false, is.aNegInt("0", -2))
    assert.equal(false, is.aNegInt("666", -2))
    assert.equal(false, is.aNegInt(1.23, -2))
    assert.equal(true,  is.aNegInt(-42, -2))
    assert.equal(false, is.aNegInt(-1, -2))
    assert.equal(false, is.aNegInt(0, -2))
    assert.equal(false, is.aNegInt(666, -2))
  })

})
