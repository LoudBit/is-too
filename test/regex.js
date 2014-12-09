var asserts = require('./_asserts')
var assert = require('assert')
var is = require('../is-too')

var regexs = ['regex', 'newRegExp']
var rx = /foo/

describe('regular expressions', function(){

  it('is.regex', function(){
    asserts.is('regex', regexs)
  })

  it('is.not.regex', function(){
    asserts.not('regex', regexs)
  })

  it('is.match', function(){
    assert.equal(true, is.match('foo', rx))
  })

  it('is.not.match', function(){
    assert.equal(true, is.not.match('bar', rx))
    assert.equal(true, is.not.match(new Date(), rx))
  })

})
