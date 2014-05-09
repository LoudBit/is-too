var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var instanceOfObject = [
  'args',
  'emptyArray',
  'emptyObject',
  'fn',
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
  'regex'
]

var instanceOfArray = [
  'emptyArray',
  'newArray',
  'plainArray'
]

describe('is.instanceOf', function(){

  it('undefined standard', function(){
    asserts.standard('instanceOf', [], undefined)
  })

  it('Object standard', function(){
    asserts.standard('instanceOf', instanceOfObject, Object)
  })

  it('Array standard', function(){
    asserts.standard('instanceOf', instanceOfArray, Array)
  })

  it('not.instanceOf', function(){
    asserts.notStandard('instanceOf', instanceOfArray, Array)
  })

})
