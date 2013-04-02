var fn = function(){}

describe('numbers', function(){

  it('number', function(){
    assert.equal(false, is.number(fn))
    assert.equal(false, is.number(new Date()))
    assert.equal(false, is.number(undefined))
    assert.equal(false, is.number(NaN))
    assert.equal(false, is.number(null))
    assert.equal(false, is.number(true))
    assert.equal(false, is.number(false))
    assert.equal(false, is.number({}))
    assert.equal(false, is.number([]))
    assert.equal(false, is.number(""))
    assert.equal(false, is.number("   "))
    assert.equal(false, is.number("asdf"))
    assert.equal(false, is.number("1.23"))
    assert.equal(false, is.number("-42"))
    assert.equal(false, is.number("-42.01"))
    assert.equal(false, is.number("-1"))
    assert.equal(false, is.number("0"))
    assert.equal(false, is.number("666"))
    assert.equal(true , is.number(1.23))
    assert.equal(true , is.number(-42))
    assert.equal(true , is.number(-1))
    assert.equal(true , is.number(0))
    assert.equal(true , is.number(666))
  })

  it('not.number', function(){
    assert.equal(true , is.not.number(fn))
    assert.equal(true , is.not.number(new Date()))
    assert.equal(true , is.not.number(undefined))
    assert.equal(true , is.not.number(NaN))
    assert.equal(true , is.not.number(null))
    assert.equal(true , is.not.number(true))
    assert.equal(true , is.not.number(false))
    assert.equal(true , is.not.number({}))
    assert.equal(true , is.not.number([]))
    assert.equal(true , is.not.number(""))
    assert.equal(true , is.not.number("   "))
    assert.equal(true , is.not.number("asdf"))
    assert.equal(true , is.not.number("1.23"))
    assert.equal(true , is.not.number("-42"))
    assert.equal(true , is.not.number("-42.01"))
    assert.equal(true , is.not.number("-1"))
    assert.equal(true , is.not.number("0"))
    assert.equal(true , is.not.number("666"))
    assert.equal(false, is.not.number(1.23))
    assert.equal(false, is.not.number(-42))
    assert.equal(false, is.not.number(-1))
    assert.equal(false, is.not.number(0))
    assert.equal(false, is.not.number(666))
  })

  it('num', function(){
    assert.equal(false, is.num(fn))
    assert.equal(false, is.num(new Date()))
    assert.equal(false, is.num(undefined))
    assert.equal(false, is.num(NaN))
    assert.equal(false, is.num(null))
    assert.equal(false, is.num(true))
    assert.equal(false, is.num(false))
    assert.equal(false, is.num({}))
    assert.equal(false, is.num([]))
    assert.equal(false, is.num(""))
    assert.equal(false, is.num("   "))
    assert.equal(false, is.num("asdf"))
    assert.equal(false, is.num("1.23"))
    assert.equal(false, is.num("-42"))
    assert.equal(false, is.num("-42.01"))
    assert.equal(false, is.num("-1"))
    assert.equal(false, is.num("0"))
    assert.equal(false, is.num("666"))
    assert.equal(true , is.num(1.23))
    assert.equal(true , is.num(-42))
    assert.equal(true , is.num(-1))
    assert.equal(true , is.num(0))
    assert.equal(true , is.num(666))
  })

  it('not.num', function(){
    assert.equal(true , is.not.num(fn))
    assert.equal(true , is.not.num(new Date()))
    assert.equal(true , is.not.num(undefined))
    assert.equal(true , is.not.num(NaN))
    assert.equal(true , is.not.num(null))
    assert.equal(true , is.not.num(true))
    assert.equal(true , is.not.num(false))
    assert.equal(true , is.not.num({}))
    assert.equal(true , is.not.num([]))
    assert.equal(true , is.not.num(""))
    assert.equal(true , is.not.num("   "))
    assert.equal(true , is.not.num("asdf"))
    assert.equal(true , is.not.num("1.23"))
    assert.equal(true , is.not.num("-42"))
    assert.equal(true , is.not.num("-42.01"))
    assert.equal(true , is.not.num("-1"))
    assert.equal(true , is.not.num("0"))
    assert.equal(true , is.not.num("666"))
    assert.equal(false, is.not.num(1.23))
    assert.equal(false, is.not.num(-42))
    assert.equal(false, is.not.num(-1))
    assert.equal(false, is.not.num(0))
    assert.equal(false, is.not.num(666))
  })

  it('aNumber', function(){
    assert.equal(false, is.aNumber(fn))
    assert.equal(false, is.aNumber(new Date()))
    assert.equal(false, is.aNumber(undefined))
    assert.equal(false, is.aNumber(NaN))
    assert.equal(false, is.aNumber(null))
    assert.equal(false, is.aNumber(true))
    assert.equal(false, is.aNumber(false))
    assert.equal(false, is.aNumber({}))
    assert.equal(false, is.aNumber([]))
    assert.equal(false, is.aNumber(""))
    assert.equal(false, is.aNumber("   "))
    assert.equal(false, is.aNumber("asdf"))
    assert.equal(true , is.aNumber("1.23"))
    assert.equal(true , is.aNumber("-42"))
    assert.equal(true , is.aNumber("-42.01"))
    assert.equal(true , is.aNumber("-1"))
    assert.equal(true , is.aNumber("0"))
    assert.equal(true , is.aNumber("666"))
    assert.equal(true , is.aNumber(1.23))
    assert.equal(true , is.aNumber(-42))
    assert.equal(true , is.aNumber(-1))
    assert.equal(true , is.aNumber(0))
    assert.equal(true , is.aNumber(666))
  })

  it('not.aNumber', function(){
    assert.equal(true , is.not.aNumber(fn))
    assert.equal(true , is.not.aNumber(new Date()))
    assert.equal(true , is.not.aNumber(undefined))
    assert.equal(true , is.not.aNumber(NaN))
    assert.equal(true , is.not.aNumber(null))
    assert.equal(true , is.not.aNumber(true))
    assert.equal(true , is.not.aNumber(false))
    assert.equal(true , is.not.aNumber({}))
    assert.equal(true , is.not.aNumber([]))
    assert.equal(true , is.not.aNumber(""))
    assert.equal(true , is.not.aNumber("   "))
    assert.equal(true , is.not.aNumber("asdf"))
    assert.equal(false, is.not.aNumber("1.23"))
    assert.equal(false, is.not.aNumber("-42"))
    assert.equal(false, is.not.aNumber("-42.01"))
    assert.equal(false, is.not.aNumber("-1"))
    assert.equal(false, is.not.aNumber("0"))
    assert.equal(false, is.not.aNumber("666"))
    assert.equal(false, is.not.aNumber(1.23))
    assert.equal(false, is.not.aNumber(-42))
    assert.equal(false, is.not.aNumber(-1))
    assert.equal(false, is.not.aNumber(0))
    assert.equal(false, is.not.aNumber(666))
  })

  it('aNum', function(){
    assert.equal(false, is.aNum(fn))
    assert.equal(false, is.aNum(new Date()))
    assert.equal(false, is.aNum(undefined))
    assert.equal(false, is.aNum(NaN))
    assert.equal(false, is.aNum(null))
    assert.equal(false, is.aNum(true))
    assert.equal(false, is.aNum(false))
    assert.equal(false, is.aNum({}))
    assert.equal(false, is.aNum([]))
    assert.equal(false, is.aNum(""))
    assert.equal(false, is.aNum("   "))
    assert.equal(false, is.aNum("asdf"))
    assert.equal(true , is.aNum("1.23"))
    assert.equal(true , is.aNum("-42"))
    assert.equal(true , is.aNum("-42.01"))
    assert.equal(true , is.aNum("-1"))
    assert.equal(true , is.aNum("0"))
    assert.equal(true , is.aNum("666"))
    assert.equal(true , is.aNum(1.23))
    assert.equal(true , is.aNum(-42))
    assert.equal(true , is.aNum(-1))
    assert.equal(true , is.aNum(0))
    assert.equal(true , is.aNum(666))
  })

  it('not.aNum', function(){
    assert.equal(true , is.not.aNum(fn))
    assert.equal(true , is.not.aNum(new Date()))
    assert.equal(true , is.not.aNum(undefined))
    assert.equal(true , is.not.aNum(NaN))
    assert.equal(true , is.not.aNum(null))
    assert.equal(true , is.not.aNum(true))
    assert.equal(true , is.not.aNum(false))
    assert.equal(true , is.not.aNum({}))
    assert.equal(true , is.not.aNum([]))
    assert.equal(true , is.not.aNum(""))
    assert.equal(true , is.not.aNum("   "))
    assert.equal(true , is.not.aNum("asdf"))
    assert.equal(false, is.not.aNum("1.23"))
    assert.equal(false, is.not.aNum("-42"))
    assert.equal(false, is.not.aNum("-42.01"))
    assert.equal(false, is.not.aNum("-1"))
    assert.equal(false, is.not.aNum("0"))
    assert.equal(false, is.not.aNum("666"))
    assert.equal(false, is.not.aNum(1.23))
    assert.equal(false, is.not.aNum(-42))
    assert.equal(false, is.not.aNum(-1))
    assert.equal(false, is.not.aNum(0))
    assert.equal(false, is.not.aNum(666))
  })

  it('zero', function(){
    assert.equal(false, is.zero(fn))
    assert.equal(false, is.zero(new Date()))
    assert.equal(false, is.zero(undefined))
    assert.equal(false, is.zero(NaN))
    assert.equal(false, is.zero(null))
    assert.equal(false, is.zero(true))
    assert.equal(false, is.zero(false))
    assert.equal(false, is.zero({}))
    assert.equal(false, is.zero([]))
    assert.equal(false, is.zero(""))
    assert.equal(false, is.zero(" 	"))
    assert.equal(false, is.zero("asdf"))
    assert.equal(false, is.zero("1.23"))
    assert.equal(false, is.zero("-42"))
    assert.equal(false, is.zero("-42.01"))
    assert.equal(false, is.zero("-1"))
    assert.equal(false, is.zero("0"))
    assert.equal(false, is.zero("666"))
    assert.equal(false, is.zero(1.23))
    assert.equal(false, is.zero(-42))
    assert.equal(false, is.zero(-1))
    assert.equal(true , is.zero(0))
    assert.equal(false, is.zero(666))
  })

  it('not.zero', function(){
    assert.equal(true , is.not.zero(fn))
    assert.equal(true , is.not.zero(new Date()))
    assert.equal(true , is.not.zero(undefined))
    assert.equal(true , is.not.zero(NaN))
    assert.equal(true , is.not.zero(null))
    assert.equal(true , is.not.zero(true))
    assert.equal(true , is.not.zero(false))
    assert.equal(true , is.not.zero({}))
    assert.equal(true , is.not.zero([]))
    assert.equal(true , is.not.zero(""))
    assert.equal(true , is.not.zero("   "))
    assert.equal(true , is.not.zero("asdf"))
    assert.equal(true , is.not.zero("1.23"))
    assert.equal(true , is.not.zero("-42"))
    assert.equal(true , is.not.zero("-42.01"))
    assert.equal(true , is.not.zero("-1"))
    assert.equal(true , is.not.zero("0"))
    assert.equal(true , is.not.zero("666"))
    assert.equal(true , is.not.zero(1.23))
    assert.equal(true , is.not.zero(-42))
    assert.equal(true , is.not.zero(-1))
    assert.equal(false, is.not.zero(0))
    assert.equal(true , is.not.zero(666))
  })

  it('aZero', function(){
    assert.equal(false, is.aZero(fn))
    assert.equal(false, is.aZero(new Date()))
    assert.equal(false, is.aZero(undefined))
    assert.equal(false, is.aZero(NaN))
    assert.equal(false, is.aZero(null))
    assert.equal(false, is.aZero(true))
    assert.equal(false, is.aZero(false))
    assert.equal(false, is.aZero({}))
    assert.equal(false, is.aZero([]))
    assert.equal(false, is.aZero(""))
    assert.equal(false, is.aZero("   "))
    assert.equal(false, is.aZero("asdf"))
    assert.equal(false, is.aZero("1.23"))
    assert.equal(false, is.aZero("-42"))
    assert.equal(false, is.aZero("-42.01"))
    assert.equal(false, is.aZero("-1"))
    assert.equal(true , is.aZero("0"))
    assert.equal(false, is.aZero("666"))
    assert.equal(false, is.aZero(1.23))
    assert.equal(false, is.aZero(-42))
    assert.equal(false, is.aZero(-1))
    assert.equal(true , is.aZero(0))
    assert.equal(false, is.aZero(666))
  })

  it('not.aZero', function(){
    assert.equal(true , is.not.aZero(fn))
    assert.equal(true , is.not.aZero(new Date()))
    assert.equal(true , is.not.aZero(undefined))
    assert.equal(true , is.not.aZero(NaN))
    assert.equal(true , is.not.aZero(null))
    assert.equal(true , is.not.aZero(true))
    assert.equal(true , is.not.aZero(false))
    assert.equal(true , is.not.aZero({}))
    assert.equal(true , is.not.aZero([]))
    assert.equal(true , is.not.aZero(""))
    assert.equal(true , is.not.aZero("   "))
    assert.equal(true , is.not.aZero("asdf"))
    assert.equal(true , is.not.aZero("1.23"))
    assert.equal(true , is.not.aZero("-42"))
    assert.equal(true , is.not.aZero("-42.01"))
    assert.equal(true , is.not.aZero("-1"))
    assert.equal(false, is.not.aZero("0"))
    assert.equal(true , is.not.aZero("666"))
    assert.equal(true , is.not.aZero(1.23))
    assert.equal(true , is.not.aZero(-42))
    assert.equal(true , is.not.aZero(-1))
    assert.equal(false, is.not.aZero(0))
    assert.equal(true , is.not.aZero(666))
  })

})
