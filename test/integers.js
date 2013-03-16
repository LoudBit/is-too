var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

describe('integers', function(){

  it('integer', function(){
    assert.equal(false, is.integer(fn))
    assert.equal(false, is.integer(new Date()))
    assert.equal(false, is.integer(undefined))
    assert.equal(false, is.integer(NaN))
    assert.equal(false, is.integer(null))
    assert.equal(false, is.integer(true))
    assert.equal(false, is.integer(false))
    assert.equal(false, is.integer({}))
    assert.equal(false, is.integer([]))
    assert.equal(false, is.integer(""))
    assert.equal(false, is.integer("  "))
    assert.equal(false, is.integer("asdf"))
    assert.equal(false, is.integer("1.23"))
    assert.equal(false, is.integer("-42"))
    assert.equal(false, is.integer("-42.01"))
    assert.equal(false, is.integer("-1"))
    assert.equal(false, is.integer("0"))
    assert.equal(false, is.integer("666"))
    assert.equal(false, is.integer(1.23))
    assert.equal(true,  is.integer(-42))
    assert.equal(true,  is.integer(-1))
    assert.equal(true,  is.integer(0))
    assert.equal(true,  is.integer(666))
  })

  it('int', function(){
    assert.equal(false, is.int(fn))
    assert.equal(false, is.int(new Date()))
    assert.equal(false, is.int(undefined))
    assert.equal(false, is.int(NaN))
    assert.equal(false, is.int(null))
    assert.equal(false, is.int(true))
    assert.equal(false, is.int(false))
    assert.equal(false, is.int({}))
    assert.equal(false, is.int([]))
    assert.equal(false, is.int(""))
    assert.equal(false, is.int("  "))
    assert.equal(false, is.int("asdf"))
    assert.equal(false, is.int("1.23"))
    assert.equal(false, is.int("-42"))
    assert.equal(false, is.int("-42.01"))
    assert.equal(false, is.int("-1"))
    assert.equal(false, is.int("0"))
    assert.equal(false, is.int("666"))
    assert.equal(false, is.int(1.23))
    assert.equal(true,  is.int(-42))
    assert.equal(true,  is.int(-1))
    assert.equal(true,  is.int(0))
    assert.equal(true,  is.int(666))
  })

  it('aInteger', function(){
    assert.equal(false, is.aInteger(fn))
    assert.equal(false, is.aInteger(new Date()))
    assert.equal(false, is.aInteger(undefined))
    assert.equal(false, is.aInteger(NaN))
    assert.equal(false, is.aInteger(null))
    assert.equal(false, is.aInteger(true))
    assert.equal(false, is.aInteger(false))
    assert.equal(false, is.aInteger({}))
    assert.equal(false, is.aInteger([]))
    assert.equal(false, is.aInteger(""))
    assert.equal(false, is.aInteger("    "))
    assert.equal(false, is.aInteger("asdf"))
    assert.equal(false, is.aInteger("1.23"))
    assert.equal(true,  is.aInteger("-42"))
    assert.equal(false, is.aInteger("-42.01"))
    assert.equal(true,  is.aInteger("-1"))
    assert.equal(true,  is.aInteger("0"))
    assert.equal(true,  is.aInteger("666"))
    assert.equal(false, is.aInteger(1.23))
    assert.equal(true,  is.aInteger(-42))
    assert.equal(true,  is.aInteger(-1))
    assert.equal(true,  is.aInteger(0))
    assert.equal(true,  is.aInteger(666))
  })

  it('aInt', function(){
    assert.equal(false, is.aInt(fn))
    assert.equal(false, is.aInt(new Date()))
    assert.equal(false, is.aInt(undefined))
    assert.equal(false, is.aInt(NaN))
    assert.equal(false, is.aInt(null))
    assert.equal(false, is.aInt(true))
    assert.equal(false, is.aInt(false))
    assert.equal(false, is.aInt({}))
    assert.equal(false, is.aInt([]))
    assert.equal(false, is.aInt(""))
    assert.equal(false, is.aInt("    "))
    assert.equal(false, is.aInt("asdf"))
    assert.equal(false, is.aInt("1.23"))
    assert.equal(true,  is.aInt("-42"))
    assert.equal(false, is.aInt("-42.01"))
    assert.equal(true,  is.aInt("-1"))
    assert.equal(true,  is.aInt("0"))
    assert.equal(true,  is.aInt("666"))
    assert.equal(false, is.aInt(1.23))
    assert.equal(true,  is.aInt(-42))
    assert.equal(true,  is.aInt(-1))
    assert.equal(true,  is.aInt(0))
    assert.equal(true,  is.aInt(666))
  })

})
