var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}
var exp = (666).toExponential()
var hex = 0x1

describe('operators', function(){

  it('greaterThan', function(){
    assert.equal(false, is.greaterThan(fn))
    assert.equal(true , is.greaterThan(new Date()))
    assert.equal(false, is.greaterThan(undefined))
    assert.equal(false, is.greaterThan(NaN))
    assert.equal(false, is.greaterThan(null))
    assert.equal(true , is.greaterThan(true))
    assert.equal(false, is.greaterThan(false))
    assert.equal(false, is.greaterThan({}))
    assert.equal(false, is.greaterThan([]))
    assert.equal(false, is.greaterThan(""))
    assert.equal(false, is.greaterThan("  "))
    assert.equal(false, is.greaterThan("asdf"))
    assert.equal(true , is.greaterThan("1.23"))
    assert.equal(false, is.greaterThan("-42"))
    assert.equal(false, is.greaterThan("-42.01"))
    assert.equal(false, is.greaterThan("-1"))
    assert.equal(false, is.greaterThan("0"))
    assert.equal(true , is.greaterThan("666"))
    assert.equal(true , is.greaterThan(1.23))
    assert.equal(false, is.greaterThan(-42))
    assert.equal(false, is.greaterThan(-1))
    assert.equal(false, is.greaterThan(-0))
    assert.equal(false, is.greaterThan(0))
    assert.equal(false, is.greaterThan(+0))
    assert.equal(true , is.greaterThan(3.14))
    assert.equal(true , is.greaterThan(666))
    assert.equal(false, is.greaterThan(-exp))
    assert.equal(true , is.greaterThan(exp))
    assert.equal(true , is.greaterThan(+exp))
    assert.equal(false, is.greaterThan(-hex))
    assert.equal(true , is.greaterThan(hex))
    assert.equal(true , is.greaterThan(+hex))
    assert.equal(false, is.greaterThan(-Infinity))
    assert.equal(true , is.greaterThan(Infinity))
    assert.equal(true , is.greaterThan(+Infinity))
    assert.equal(false, is.greaterThan("-Infinity"))
    assert.equal(true , is.greaterThan("Infinity"))
    assert.equal(true , is.greaterThan("+Infinity"))
  })

  it('not.greaterThan', function(){
    assert.equal(true , is.not.greaterThan(fn))
    assert.equal(false, is.not.greaterThan(new Date()))
    assert.equal(true , is.not.greaterThan(undefined))
    assert.equal(true , is.not.greaterThan(NaN))
    assert.equal(true , is.not.greaterThan(null))
    assert.equal(false, is.not.greaterThan(true))
    assert.equal(true , is.not.greaterThan(false))
    assert.equal(true , is.not.greaterThan({}))
    assert.equal(true , is.not.greaterThan([]))
    assert.equal(true , is.not.greaterThan(""))
    assert.equal(true , is.not.greaterThan("  "))
    assert.equal(true , is.not.greaterThan("asdf"))
    assert.equal(false, is.not.greaterThan("1.23"))
    assert.equal(true , is.not.greaterThan("-42"))
    assert.equal(true , is.not.greaterThan("-42.01"))
    assert.equal(true , is.not.greaterThan("-1"))
    assert.equal(true , is.not.greaterThan("0"))
    assert.equal(false, is.not.greaterThan("666"))
    assert.equal(false, is.not.greaterThan(1.23))
    assert.equal(true , is.not.greaterThan(-42))
    assert.equal(true , is.not.greaterThan(-1))
    assert.equal(true , is.not.greaterThan(-0))
    assert.equal(true , is.not.greaterThan(0))
    assert.equal(true , is.not.greaterThan(+0))
    assert.equal(false, is.not.greaterThan(3.14))
    assert.equal(false, is.not.greaterThan(666))
    assert.equal(true , is.not.greaterThan(-exp))
    assert.equal(false, is.not.greaterThan(exp))
    assert.equal(false, is.not.greaterThan(+exp))
    assert.equal(true , is.not.greaterThan(-hex))
    assert.equal(false, is.not.greaterThan(hex))
    assert.equal(false, is.not.greaterThan(+hex))
    assert.equal(true , is.not.greaterThan(-Infinity))
    assert.equal(false, is.not.greaterThan(Infinity))
    assert.equal(false, is.not.greaterThan(+Infinity))
    assert.equal(true , is.not.greaterThan("-Infinity"))
    assert.equal(false, is.not.greaterThan("Infinity"))
    assert.equal(false, is.not.greaterThan("+Infinity"))
  })

  it('greaterThanOrEqualTo', function(){
    assert.equal(false, is.greaterThanOrEqualTo(fn))
    assert.equal(true , is.greaterThanOrEqualTo(new Date()))
    assert.equal(false, is.greaterThanOrEqualTo(undefined))
    assert.equal(false, is.greaterThanOrEqualTo(NaN))
    assert.equal(true , is.greaterThanOrEqualTo(null))
    assert.equal(true , is.greaterThanOrEqualTo(true))
    assert.equal(true , is.greaterThanOrEqualTo(false))
    assert.equal(false, is.greaterThanOrEqualTo({}))
    assert.equal(true , is.greaterThanOrEqualTo([]))
    assert.equal(true , is.greaterThanOrEqualTo(""))
    assert.equal(true , is.greaterThanOrEqualTo("  "))
    assert.equal(false, is.greaterThanOrEqualTo("asdf"))
    assert.equal(true , is.greaterThanOrEqualTo("1.23"))
    assert.equal(false, is.greaterThanOrEqualTo("-42"))
    assert.equal(false, is.greaterThanOrEqualTo("-42.01"))
    assert.equal(false, is.greaterThanOrEqualTo("-1"))
    assert.equal(true , is.greaterThanOrEqualTo("0"))
    assert.equal(true , is.greaterThanOrEqualTo("666"))
    assert.equal(true , is.greaterThanOrEqualTo(1.23))
    assert.equal(false, is.greaterThanOrEqualTo(-42))
    assert.equal(false, is.greaterThanOrEqualTo(-1))
    assert.equal(true , is.greaterThanOrEqualTo(-0))
    assert.equal(true , is.greaterThanOrEqualTo(0))
    assert.equal(true , is.greaterThanOrEqualTo(+0))
    assert.equal(true , is.greaterThanOrEqualTo(3.14))
    assert.equal(true , is.greaterThanOrEqualTo(666))
    assert.equal(false, is.greaterThanOrEqualTo(-exp))
    assert.equal(true , is.greaterThanOrEqualTo(exp))
    assert.equal(true , is.greaterThanOrEqualTo(+exp))
    assert.equal(false, is.greaterThanOrEqualTo(-hex))
    assert.equal(true , is.greaterThanOrEqualTo(hex))
    assert.equal(true , is.greaterThanOrEqualTo(+hex))
    assert.equal(false, is.greaterThanOrEqualTo(-Infinity))
    assert.equal(true , is.greaterThanOrEqualTo(Infinity))
    assert.equal(true , is.greaterThanOrEqualTo(+Infinity))
    assert.equal(false, is.greaterThanOrEqualTo("-Infinity"))
    assert.equal(true , is.greaterThanOrEqualTo("Infinity"))
    assert.equal(true , is.greaterThanOrEqualTo("+Infinity"))
  })

  it('not.greaterThanOrEqualTo', function(){
    assert.equal(true , is.not.greaterThanOrEqualTo(fn))
    assert.equal(false, is.not.greaterThanOrEqualTo(new Date()))
    assert.equal(true , is.not.greaterThanOrEqualTo(undefined))
    assert.equal(true , is.not.greaterThanOrEqualTo(NaN))
    assert.equal(false, is.not.greaterThanOrEqualTo(null))
    assert.equal(false, is.not.greaterThanOrEqualTo(true))
    assert.equal(false, is.not.greaterThanOrEqualTo(false))
    assert.equal(true , is.not.greaterThanOrEqualTo({}))
    assert.equal(false, is.not.greaterThanOrEqualTo([]))
    assert.equal(false, is.not.greaterThanOrEqualTo(""))
    assert.equal(false, is.not.greaterThanOrEqualTo("  "))
    assert.equal(true , is.not.greaterThanOrEqualTo("asdf"))
    assert.equal(false, is.not.greaterThanOrEqualTo("1.23"))
    assert.equal(true , is.not.greaterThanOrEqualTo("-42"))
    assert.equal(true , is.not.greaterThanOrEqualTo("-42.01"))
    assert.equal(true , is.not.greaterThanOrEqualTo("-1"))
    assert.equal(false, is.not.greaterThanOrEqualTo("0"))
    assert.equal(false, is.not.greaterThanOrEqualTo("666"))
    assert.equal(false, is.not.greaterThanOrEqualTo(1.23))
    assert.equal(true , is.not.greaterThanOrEqualTo(-42))
    assert.equal(true , is.not.greaterThanOrEqualTo(-1))
    assert.equal(false, is.not.greaterThanOrEqualTo(-0))
    assert.equal(false, is.not.greaterThanOrEqualTo(0))
    assert.equal(false, is.not.greaterThanOrEqualTo(+0))
    assert.equal(false, is.not.greaterThanOrEqualTo(3.14))
    assert.equal(false, is.not.greaterThanOrEqualTo(666))
    assert.equal(true , is.not.greaterThanOrEqualTo(-exp))
    assert.equal(false, is.not.greaterThanOrEqualTo(exp))
    assert.equal(false, is.not.greaterThanOrEqualTo(+exp))
    assert.equal(true , is.not.greaterThanOrEqualTo(-hex))
    assert.equal(false, is.not.greaterThanOrEqualTo(hex))
    assert.equal(false, is.not.greaterThanOrEqualTo(+hex))
    assert.equal(true , is.not.greaterThanOrEqualTo(-Infinity))
    assert.equal(false, is.not.greaterThanOrEqualTo(Infinity))
    assert.equal(false, is.not.greaterThanOrEqualTo(+Infinity))
    assert.equal(true , is.not.greaterThanOrEqualTo("-Infinity"))
    assert.equal(false, is.not.greaterThanOrEqualTo("Infinity"))
    assert.equal(false, is.not.greaterThanOrEqualTo("+Infinity"))
  })

})
