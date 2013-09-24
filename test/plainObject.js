var assert = require('assert')
var is = require('../lib/is')

var fn = function(){}
var exp = (666).toExponential()
var hex = 0x1

describe('plainObject', function(){

  it('works', function(){
    assert.equal(false, is.plainObject( fn ), 'fn should be false')
    assert.equal(false, is.plainObject( new Date() ), 'new Date() should be false')
    assert.equal(false, is.plainObject( undefined ), 'undefined should be false')
    assert.equal(false, is.plainObject( NaN ), 'NaN should be false')
    assert.equal(false, is.plainObject( null ), 'null should be false')
    assert.equal(false, is.plainObject( true ), 'true should be false')
    assert.equal(false, is.plainObject( false ), 'false should be false')
    assert.equal(true , is.plainObject( Object.create(null) ), 'Object.create(null) should be true ')
    assert.equal(true , is.plainObject( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be true ')
    assert.equal(true , is.plainObject( new Object() ), 'new Object() should be true ')
    assert.equal(true , is.plainObject( {} ), '{} should be true ')
    assert.equal(true , is.plainObject( {foo:"bar"} ), '{foo:"bar"} should be true ')
    assert.equal(true , is.plainObject( {length:1} ), '{length:1} should be true ')
    assert.equal(false, is.plainObject( new Array() ), 'new Array() should be false')
    assert.equal(false, is.plainObject( [] ), '[] should be false')
    assert.equal(false, is.plainObject( ["foo", "bar"] ), '["foo", "bar"] should be false')
    assert.equal(false, is.plainObject( arguments ), 'arguments should be false')
    assert.equal(false, is.plainObject( "" ), '"" should be false')
    assert.equal(false, is.plainObject( "  " ), '"  " should be false')
    assert.equal(false, is.plainObject( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.plainObject( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.plainObject( "-42" ), '"-42" should be false')
    assert.equal(false, is.plainObject( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.plainObject( "-1" ), '"-1" should be false')
    assert.equal(false, is.plainObject( "0" ), '"0" should be false')
    assert.equal(false, is.plainObject( "666" ), '"666" should be false')
    assert.equal(false, is.plainObject( 1.23 ), '1.23 should be false')
    assert.equal(false, is.plainObject( -42 ), '-42 should be false')
    assert.equal(false, is.plainObject( -1 ), '-1 should be false')
    assert.equal(false, is.plainObject( 0 ), '0 should be false')
    assert.equal(false, is.plainObject( 666 ), '666 should be false')
    assert.equal(false, is.plainObject( -exp ), '-exp should be false')
    assert.equal(false, is.plainObject( exp ), 'exp should be false')
    assert.equal(false, is.plainObject( +exp ), '+exp should be false')
    assert.equal(false, is.plainObject( -hex ), '-hex should be false')
    assert.equal(false, is.plainObject( hex ), 'hex should be false')
    assert.equal(false, is.plainObject( +hex ), '+hex should be false')
    assert.equal(false, is.plainObject( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.plainObject( Infinity ), 'Infinity should be false')
    assert.equal(false, is.plainObject( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.plainObject( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.plainObject( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.plainObject( "+Infinity" ), '"+Infinity" should be false')
  })

})
