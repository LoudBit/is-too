var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}
var exp = (666).toExponential()
var hex = 0x1

describe('less than', function(){

  it('lessThan', function(){
    assert.equal(false, is.lessThan(fn))
    assert.equal(false, is.lessThan(new Date()))
    assert.equal(false, is.lessThan(undefined))
    assert.equal(false, is.lessThan(NaN))
    assert.equal(false, is.lessThan(null))
    assert.equal(false, is.lessThan(true))
    assert.equal(false, is.lessThan(false))
    assert.equal(false, is.lessThan({}))
    assert.equal(false, is.lessThan([]))
    assert.equal(false, is.lessThan(""))
    assert.equal(false, is.lessThan("  "))
    assert.equal(false, is.lessThan("asdf"))
    assert.equal(false, is.lessThan("1.23"))
    assert.equal(true , is.lessThan("-42"))
    assert.equal(true , is.lessThan("-42.01"))
    assert.equal(true , is.lessThan("-1"))
    assert.equal(false, is.lessThan("0"))
    assert.equal(false, is.lessThan("666"))
    assert.equal(false, is.lessThan(1.23))
    assert.equal(true , is.lessThan(-42))
    assert.equal(true , is.lessThan(-1))
    assert.equal(false, is.lessThan(-0))
    assert.equal(false, is.lessThan(0))
    assert.equal(false, is.lessThan(+0))
    assert.equal(false, is.lessThan(3.14))
    assert.equal(false, is.lessThan(666))
    assert.equal(true , is.lessThan(-exp))
    assert.equal(false, is.lessThan(exp))
    assert.equal(false, is.lessThan(+exp))
    assert.equal(true , is.lessThan(-hex))
    assert.equal(false, is.lessThan(hex))
    assert.equal(false, is.lessThan(+hex))
    assert.equal(true , is.lessThan(-Infinity))
    assert.equal(false, is.lessThan(Infinity))
    assert.equal(false, is.lessThan(+Infinity))
    assert.equal(true , is.lessThan("-Infinity"))
    assert.equal(false, is.lessThan("Infinity"))
    assert.equal(false, is.lessThan("+Infinity"))
  })

  it('not.lessThan', function(){
    assert.equal(true , is.not.lessThan(fn))
    assert.equal(true , is.not.lessThan(new Date()))
    assert.equal(true , is.not.lessThan(undefined))
    assert.equal(true , is.not.lessThan(NaN))
    assert.equal(true , is.not.lessThan(null))
    assert.equal(true , is.not.lessThan(true))
    assert.equal(true , is.not.lessThan(false))
    assert.equal(true , is.not.lessThan({}))
    assert.equal(true , is.not.lessThan([]))
    assert.equal(true , is.not.lessThan(""))
    assert.equal(true , is.not.lessThan("  "))
    assert.equal(true , is.not.lessThan("asdf"))
    assert.equal(true , is.not.lessThan("1.23"))
    assert.equal(false, is.not.lessThan("-42"))
    assert.equal(false, is.not.lessThan("-42.01"))
    assert.equal(false, is.not.lessThan("-1"))
    assert.equal(true , is.not.lessThan("0"))
    assert.equal(true , is.not.lessThan("666"))
    assert.equal(true , is.not.lessThan(1.23))
    assert.equal(false, is.not.lessThan(-42))
    assert.equal(false, is.not.lessThan(-1))
    assert.equal(true , is.not.lessThan(-0))
    assert.equal(true , is.not.lessThan(0))
    assert.equal(true , is.not.lessThan(+0))
    assert.equal(true , is.not.lessThan(3.14))
    assert.equal(true , is.not.lessThan(666))
    assert.equal(false, is.not.lessThan(-exp))
    assert.equal(true , is.not.lessThan(exp))
    assert.equal(true , is.not.lessThan(+exp))
    assert.equal(false, is.not.lessThan(-hex))
    assert.equal(true , is.not.lessThan(hex))
    assert.equal(true , is.not.lessThan(+hex))
    assert.equal(false, is.not.lessThan(-Infinity))
    assert.equal(true , is.not.lessThan(Infinity))
    assert.equal(true , is.not.lessThan(+Infinity))
    assert.equal(false, is.not.lessThan("-Infinity"))
    assert.equal(true , is.not.lessThan("Infinity"))
    assert.equal(true , is.not.lessThan("+Infinity"))
  })

  it('lessThanOrEqualTo', function(){
    assert.equal(false, is.lessThanOrEqualTo(fn))
    assert.equal(false, is.lessThanOrEqualTo(new Date()))
    assert.equal(false, is.lessThanOrEqualTo(undefined))
    assert.equal(false, is.lessThanOrEqualTo(NaN))
    assert.equal(true , is.lessThanOrEqualTo(null))
    assert.equal(false, is.lessThanOrEqualTo(true))
    assert.equal(true , is.lessThanOrEqualTo(false))
    assert.equal(false, is.lessThanOrEqualTo({}))
    assert.equal(true , is.lessThanOrEqualTo([]))
    assert.equal(true , is.lessThanOrEqualTo(""))
    assert.equal(true , is.lessThanOrEqualTo("  "))
    assert.equal(false, is.lessThanOrEqualTo("asdf"))
    assert.equal(false, is.lessThanOrEqualTo("1.23"))
    assert.equal(true , is.lessThanOrEqualTo("-42"))
    assert.equal(true , is.lessThanOrEqualTo("-42.01"))
    assert.equal(true , is.lessThanOrEqualTo("-1"))
    assert.equal(true , is.lessThanOrEqualTo("0"))
    assert.equal(false, is.lessThanOrEqualTo("666"))
    assert.equal(false, is.lessThanOrEqualTo(1.23))
    assert.equal(true , is.lessThanOrEqualTo(-42))
    assert.equal(true , is.lessThanOrEqualTo(-1))
    assert.equal(true , is.lessThanOrEqualTo(-0))
    assert.equal(true , is.lessThanOrEqualTo(0))
    assert.equal(true , is.lessThanOrEqualTo(+0))
    assert.equal(false, is.lessThanOrEqualTo(3.14))
    assert.equal(false, is.lessThanOrEqualTo(666))
    assert.equal(true , is.lessThanOrEqualTo(-exp))
    assert.equal(false, is.lessThanOrEqualTo(exp))
    assert.equal(false, is.lessThanOrEqualTo(+exp))
    assert.equal(true , is.lessThanOrEqualTo(-hex))
    assert.equal(false, is.lessThanOrEqualTo(hex))
    assert.equal(false, is.lessThanOrEqualTo(+hex))
    assert.equal(true , is.lessThanOrEqualTo(-Infinity))
    assert.equal(false, is.lessThanOrEqualTo(Infinity))
    assert.equal(false, is.lessThanOrEqualTo(+Infinity))
    assert.equal(true , is.lessThanOrEqualTo("-Infinity"))
    assert.equal(false, is.lessThanOrEqualTo("Infinity"))
    assert.equal(false, is.lessThanOrEqualTo("+Infinity"))
  })

  it('not.lessThanOrEqualTo', function(){
    assert.equal(true , is.not.lessThanOrEqualTo(fn))
    assert.equal(true , is.not.lessThanOrEqualTo(new Date()))
    assert.equal(true , is.not.lessThanOrEqualTo(undefined))
    assert.equal(true , is.not.lessThanOrEqualTo(NaN))
    assert.equal(false, is.not.lessThanOrEqualTo(null))
    assert.equal(true , is.not.lessThanOrEqualTo(true))
    assert.equal(false, is.not.lessThanOrEqualTo(false))
    assert.equal(true , is.not.lessThanOrEqualTo({}))
    assert.equal(false, is.not.lessThanOrEqualTo([]))
    assert.equal(false, is.not.lessThanOrEqualTo(""))
    assert.equal(false, is.not.lessThanOrEqualTo("  "))
    assert.equal(true , is.not.lessThanOrEqualTo("asdf"))
    assert.equal(true , is.not.lessThanOrEqualTo("1.23"))
    assert.equal(false, is.not.lessThanOrEqualTo("-42"))
    assert.equal(false, is.not.lessThanOrEqualTo("-42.01"))
    assert.equal(false, is.not.lessThanOrEqualTo("-1"))
    assert.equal(false, is.not.lessThanOrEqualTo("0"))
    assert.equal(true , is.not.lessThanOrEqualTo("666"))
    assert.equal(true , is.not.lessThanOrEqualTo(1.23))
    assert.equal(false, is.not.lessThanOrEqualTo(-42))
    assert.equal(false, is.not.lessThanOrEqualTo(-1))
    assert.equal(false, is.not.lessThanOrEqualTo(-0))
    assert.equal(false, is.not.lessThanOrEqualTo(0))
    assert.equal(false, is.not.lessThanOrEqualTo(+0))
    assert.equal(true , is.not.lessThanOrEqualTo(3.14))
    assert.equal(true , is.not.lessThanOrEqualTo(666))
    assert.equal(false, is.not.lessThanOrEqualTo(-exp))
    assert.equal(true , is.not.lessThanOrEqualTo(exp))
    assert.equal(true , is.not.lessThanOrEqualTo(+exp))
    assert.equal(false, is.not.lessThanOrEqualTo(-hex))
    assert.equal(true , is.not.lessThanOrEqualTo(hex))
    assert.equal(true , is.not.lessThanOrEqualTo(+hex))
    assert.equal(false, is.not.lessThanOrEqualTo(-Infinity))
    assert.equal(true , is.not.lessThanOrEqualTo(Infinity))
    assert.equal(true , is.not.lessThanOrEqualTo(+Infinity))
    assert.equal(false, is.not.lessThanOrEqualTo("-Infinity"))
    assert.equal(true , is.not.lessThanOrEqualTo("Infinity"))
    assert.equal(true , is.not.lessThanOrEqualTo("+Infinity"))
  })

})
