var assert = require('assert')
var is = require('../lib/is')

var fn = function(){}
var exp = (666).toExponential()
var hex = 0x1

describe('Arrays', function(){

  it('is.array', function(){
    assert.equal(false, is.array( fn ), 'fn should be false')
    assert.equal(false, is.array( new Date() ), 'new Date() should be false')
    assert.equal(false, is.array( undefined ), 'undefined should be false')
    assert.equal(false, is.array( NaN ), 'NaN should be false')
    assert.equal(false, is.array( null ), 'null should be false')
    assert.equal(false, is.array( true ), 'true should be false')
    assert.equal(false, is.array( false ), 'false should be false')
    assert.equal(false, is.array( Object.create(null) ), 'Object.create(null) should be false')
    assert.equal(false, is.array( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be false')
    assert.equal(false, is.array( new Object() ), 'new Object() should be false')
    assert.equal(false, is.array( {} ), '{} should be false')
    assert.equal(false, is.array( {foo:"bar"} ), '{foo:"bar"} should be false')
    assert.equal(false, is.array( {length:1} ), '{length:1} should be false')
    assert.equal(true , is.array( new Array() ), 'new Array() should be true ')
    assert.equal(true , is.array( [] ), '[] should be true ')
    assert.equal(true , is.array( ["foo", "bar"] ), '["foo", "bar"] should be true ')
    assert.equal(false, is.array( arguments ), 'arguments should be false')
    assert.equal(false, is.array( "" ), '"" should be false')
    assert.equal(false, is.array( "  " ), '"  " should be false')
    assert.equal(false, is.array( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.array( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.array( "-42" ), '"-42" should be false')
    assert.equal(false, is.array( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.array( "-1" ), '"-1" should be false')
    assert.equal(false, is.array( "0" ), '"0" should be false')
    assert.equal(false, is.array( "666" ), '"666" should be false')
    assert.equal(false, is.array( 1.23 ), '1.23 should be false')
    assert.equal(false, is.array( -42 ), '-42 should be false')
    assert.equal(false, is.array( -1 ), '-1 should be false')
    assert.equal(false, is.array( 0 ), '0 should be false')
    assert.equal(false, is.array( 666 ), '666 should be false')
    assert.equal(false, is.array( -exp ), '-exp should be false')
    assert.equal(false, is.array( exp ), 'exp should be false')
    assert.equal(false, is.array( +exp ), '+exp should be false')
    assert.equal(false, is.array( -hex ), '-hex should be false')
    assert.equal(false, is.array( hex ), 'hex should be false')
    assert.equal(false, is.array( +hex ), '+hex should be false')
    assert.equal(false, is.array( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.array( Infinity ), 'Infinity should be false')
    assert.equal(false, is.array( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.array( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.array( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.array( "+Infinity" ), '"+Infinity" should be false')
  })

  it('is.not.array', function(){
    assert.equal(true , is.not.array({foo:'bar'}))
    assert.equal(false, is.not.array(new Array()))
    assert.equal(false, is.not.array([]))
  })

  it('is.arr', function(){
    assert.equal(false, is.arr({foo:'bar'}))
    assert.equal(true , is.arr(new Array()))
  })

  it('is.not.arr', function(){
    assert.equal(true , is.not.arr({foo:'bar'}))
    assert.equal(false, is.not.arr(new Array()))
    assert.equal(false, is.not.arr([]))
  })

})

describe('Arguments', function(){

  it('is.arguments', function(){
    assert.equal(false, is.args( fn ), 'fn should be false')
    assert.equal(false, is.args( new Date() ), 'new Date() should be false')
    assert.equal(false, is.args( undefined ), 'undefined should be false')
    assert.equal(false, is.args( NaN ), 'NaN should be false')
    assert.equal(false, is.args( null ), 'null should be false')
    assert.equal(false, is.args( true ), 'true should be false')
    assert.equal(false, is.args( false ), 'false should be false')
    assert.equal(false, is.args( Object.create(null) ), 'Object.create(null) should be false')
    assert.equal(false, is.args( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be false')
    assert.equal(false, is.args( new Object() ), 'new Object() should be false')
    assert.equal(false, is.args( {} ), '{} should be false')
    assert.equal(false, is.args( {foo:"bar"} ), '{foo:"bar"} should be false')
    assert.equal(false, is.args( {length:1} ), '{length:1} should be false')
    assert.equal(false, is.args( new Array() ), 'new Array() should be false')
    assert.equal(false, is.args( [] ), '[] should be false')
    assert.equal(false, is.args( ["foo", "bar"] ), '["foo", "bar"] should be false')
    assert.equal(true , is.args( arguments ), 'arguments should be true')
    assert.equal(false, is.args( "" ), '"" should be false')
    assert.equal(false, is.args( "  " ), '"  " should be false')
    assert.equal(false, is.args( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.args( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.args( "-42" ), '"-42" should be false')
    assert.equal(false, is.args( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.args( "-1" ), '"-1" should be false')
    assert.equal(false, is.args( "0" ), '"0" should be false')
    assert.equal(false, is.args( "666" ), '"666" should be false')
    assert.equal(false, is.args( 1.23 ), '1.23 should be false')
    assert.equal(false, is.args( -42 ), '-42 should be false')
    assert.equal(false, is.args( -1 ), '-1 should be false')
    assert.equal(false, is.args( 0 ), '0 should be false')
    assert.equal(false, is.args( 666 ), '666 should be false')
    assert.equal(false, is.args( -exp ), '-exp should be false')
    assert.equal(false, is.args( exp ), 'exp should be false')
    assert.equal(false, is.args( +exp ), '+exp should be false')
    assert.equal(false, is.args( -hex ), '-hex should be false')
    assert.equal(false, is.args( hex ), 'hex should be false')
    assert.equal(false, is.args( +hex ), '+hex should be false')
    assert.equal(false, is.args( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.args( Infinity ), 'Infinity should be false')
    assert.equal(false, is.args( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.args( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.args( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.args( "+Infinity" ), '"+Infinity" should be false')
  })

  it('is.not.arguments', function(){
    assert.equal(false, is.not.args(arguments))
    assert.equal(true , is.not.args([]))
  })

})
