/*!
  * is-too - simple validations and type-checking
  * https://github.com/LoudBit/is-too
  * copyright Loud Bit LLC
  * MIT License
  */

// PRIVATE HELPERS

/**
 * sort style comparison of provided dates
 *
 * @method sortDates
 * @param {Date} subject
 * @param {Date} standard, optional
 */
function sortDates(x, y) {
  y = !is.date(y) ? new Date() : y
  var a = 'getFullYear', b = 'getMonth', c = 'getDate'
  return  x[a]() < y[a]() ? -1
        : x[a]() > y[a]() ? 1
        : x[b]() < y[b]() ? -1
        : x[b]() > y[b]() ? 1
        : x[c]() < y[c]() ? -1
        : x[c]() > y[c]() ? 1
        : 0
}

function reghex(x) {
  return x.replace && x.replace(/^-?\+?(0x)?/i, '') || x
}

var is = {

  // OPERATORS

  /**
   * Is the subject not null, undefined, or an empty string?
   *
   * @method present
   * @param {Object} subject, required
   */
  present: function(x) {
    return x != null && !is.emtStr(x)
  },

  /**
   * Is the subject loosely equivalent to the standard?
   *
   * @method equal
   * @param {Object} subject, required
   * @param {Object} standard, required
   */
  equal: function(x, y) {
    return x == y
  },

  /**
   * Is the subject loosely different from the standard?
   *
   * @method equal
   * @param {Object} subject, required
   * @param {Object} standard, required
   */
  unequal: function(x, y) {
    return x != y
  },

  /**
   * Is the subject strictly equivalent to the standard?
   *
   * @method exactly
   * @param {Object} subject, required
   * @param {Object} standard, required
   */
  exactly: function(x, y) {
    return x === y
  },

  /**
   * Is the subject strictly equivalent to the standard?
   *
   * @method exactly
   * @param {Object} subject, required
   * @param {Object} standard, required
   */
  notExactly: function(x, y) {
    return x !== y
  },

  /**
   * Is the subject greater than the standard?
   *
   * Performs basic JS greater than operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.2
   *
   * @method greaterThan
   * @param {Object} subject
   * @param {Object} standard, optional, defaults to 0
   */
  greaterThan: function(x, y) {
    y = y || 0
    return x > y
  },

  /**
   * Is the subject greater than or equal to the standard?
   *
   * Performs basic JS greater than or equal to operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.4
   *
   * @method greaterThanOrEqualTo
   * @param {Object} subject
   * @param {Object} standard, optional, defaults to 0
   */
  greaterThanOrEqualTo: function(x, y) {
    y = y || 0
    return x >= y
  },

  /**
   * Is the subject less than the standard?
   *
   * Performs basic JS less than operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.1
   *
   * @method lessThan
   * @param {Object} subject
   * @param {Object} standard, optional, defaults to 0
   */
  lessThan: function(x, y) {
    y = y || 0
    return x < y
  },

  /**
   * Is the subject less than or equal to the standard?
   *
   * Performs basic JS less than or equal to operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.3
   *
   * @method lessThanOrEqualTo
   * @param {Object} subject
   * @param {Object} standard, optional, defaults to 0
   */
  lessThanOrEqualTo: function(x, y) {
    y = y || 0
    return x <= y
  },

  /**
   * Is the subject an instance of the standard?
   *
   * @method instanceOf
   * @param {Object} subject
   * @param {Object} standard, optional, defaults to 0
   */
  instanceOf: function(x, y) {
    return is.present(y) && x instanceof y
  },

  /**
   * Is the subject longer than the standard?
   *
   * Performs basic JS longer than operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.2
   *
   * @method longerThan
   * @param {Object} subject
   * @param {Number} standard, optional, defaults to 0
   */
  longerThan: function(x, y) {
    y = y || 0
    return !is.undef(x) && !is.nil(x) && x.length > y
  },

  /**
   * Is the subject longer than or equal to the standard?
   *
   * @method longerThanOrEqualTo
   * @param {Object} subject
   * @param {Number} standard, optional, defaults to 0
   */
  longerThanOrEqualTo: function(x, y) {
    y = y || 0
    return !is.undef(x) && !is.nil(x) && x.length >= y
  },

  /**
   * Is the subject shorter than the standard?
   *
   * Performs basic JS shorter than operator, which will cast values
   * http://bclary.com/2004/11/07/#a-11.8.2
   *
   * @method shorterThan
   * @param {Object} subject
   * @param {Number} standard, optional, defaults to 0
   */
  shorterThan: function(x, y) {
    y = y || 0
    return !is.undef(x) && !is.nil(x) && x.length < y
  },

  /**
   * Is the subject shorter than or equal to the standard?
   *
   * @method shorterThanOrEqualTo
   * @param {Object} subject
   * @param {Number} standard, optional, defaults to 0
   */
  shorterThanOrEqualTo: function(x, y) {
    y = y || 0
    return !is.undef(x) && !is.nil(x) && x.length <= y
  },

  // PRIMITIVES

  /**
   * Is the subject a boolean?
   *
   * @method boolean
   * @param {Boolean} subject, required
   */
  boolean: function(x) {
    return typeof x == 'boolean'
  },

  /**
   * Is the subject exactly null?
   *
   * @method nil
   * @param {Null} subject, required
   */
  nil: function(x) {
    return x === null
  },

  /**
   * Is the subject exactly undefined?
   *
   * @method undefined
   * @param {undefined} subject, required
   */
  undef: function(x) {
    return x === void 0
  },

  /**
   * Is the subject exactly false?
   *
   * @method false
   * @param {Object} subject
   */
  false: function(x) {
    return x === false
  },

  /**
   * Is the subject falsy?
   *
   * @method false
   * @param {Object} subject
   */
  falsy: function(x) {
    return !x
  },

  /**
   * Is the subject exactly true?
   *
   * @method true
   * @param {Object} subject
   */
  true: function(x) {
    return x === true
  },

  /**
   * Is the subject truthy?
   *
   * @method truthy
   * @param {Object} subject
   */
  truthy: function(x) {
    return !!x
  },



  // OBJECTS

  /**
   * Is the subject an Object?
   *
   * @method object
   * @param {Object} subject, required
   */
  object: function(x) {
    return typeof x == 'object'
  },

  /**
   * Is the subject a plain Object?
   *
   * @method plainObject
   * @param {Object} subject, required
   */
  plainObject: function(x) {
    // covers most things
    if (!x || !is.obj(x) || x.nodeType || is.args(x) || is.arr(x) || is.bool(x) || is.date(x) || is.func(x) || is.num(x) || is.str(x) || is.rx(x))
      return false

    // Object.create(null) creates objects w/o `valueOf` which throws when the object is an argument of isNaN
    // yet that should evaluate to `true`
    return x.valueOf && isNaN(x) || true
  },

  /**
   * Is the subject an arguments object?
   *
   * @method array
   * @param {Arguments} subject, required
   */
  args: function(x) {
    return Object.prototype.toString.call(x) == '[object Arguments]'
  },

  /**
   * Is the subject an array?
   *
   * @method array
   * @param {Array} subject, required
   */
  array: function(x) {
    return Array.isArray(x)
  },

  /**
   * Is the subject a function?
   *
   * @method func
   * @param {Function} subject, required
   */
  func: function(x) {
    return typeof x == 'function'
  },


  // REGULAR EXPRESSIONS

  /**
   * Is the subject a regular expression?
   *
   * @method regex
   * @param {RegEx} subject, required
   */
  regex: function(x) {
    return Object.prototype.toString.call(x) == '[object RegExp]'
  },

  /**
   * Does the subject match the provided regular expression?
   *
   * @method match
   * @param {String} subject, required
   * @param {RegExp} standard, required
   */
  match: function(x, rx) {
    return is.rx(rx) && rx.test(x)
  },

  // STRINGS

  /**
   * Is the subject a string?
   *
   * @method string
   * @param {String} subject, required
   */
  string: function(x) {
    return typeof x == 'string'
  },

  /**
   * Is the subject an empty string?
   * Empty being nothing or only whitespace.
   *
   * @method emptyString
   * @param {String} subject, required
   */
  emptyString: function(x) {
    return is.str(x) ? x.replace(/\s/g, '') === '' : false
  },


  // NUMBERS

  /**
   * Is the subject a number?
   *
   * @method number
   * @param {Object} subject, required
   */
  number: function(x) {
    return typeof x === 'number' && !isNaN(x)
  },

  /**
   * Is the subject a number, or a number in a string?
   *
   * @method numberString
   * @param {Object} subject, required
   */
  numberString: function(x) {
    return is.str(x) && (is.hexstr(x) || !isNaN(parseFloat(reghex(x))))
  },

  /**
   * Is the subject an integer?
   *
   * @method integer
   * @param {Number} subject, required
   */
  integer: function(x) {
    return typeof x === 'number' && x % 1 === 0
  },

  /**
   * Is the subject an integer, or an integer in a string?
   *
   * @method integerString
   * @param {Object} subject, required
   */
  integerString: function(x) {
    return is.str(x) && is.int(is.toNum(reghex(x)))
  },

  /**
   * Is the subject a hexadecimal number?
   *
   * @method integer
   * @param {Number} subject, required
   */
  hexadecimal: function(x) {
    return is.not.str(x) && parseInt(x, 16).toString(16) == x
  },

  /**
   * Is the subject a hexadecimal string?
   *
   * @method integer
   * @param {Number} subject, required
   */
  hexadecimalString: function(x) {
    if (is.not.str(x))
      return false
    var z = reghex(x)
    return parseInt(z, 16).toString(16) == z
  },

  /**
   * Is the subject exactly zero?
   *
   * @method zero
   * @param {Number} subject, required
   */
  zero: function(x) {
    return x === 0
  },

  /**
   * Is the subject zero, or a zero in a string?
   *
   * @method aZero
   * @param {Object} subject, required
   */
  zeroString: function(x) {
    return is.str(x) && is.zero(is.toNum(reghex(x)))
  },


  // DATES

  /**
   * Is the subject a date?
   *
   * @method date
   * @param {Object} required
   */
  date: function(x) {
    return Object.prototype.toString.call(x) == '[object Date]'
  },

  /**
   * Is the subject the same date as standard?
   * Does not test date times.
   *
   * @method sameDate
   * @param {Date} subject, required
   * @param {Date} standard, required
   */
  sameDate: function(x, y) {
    return is.date(x) && is.date(y) && !sortDates(x, y)
  },

  /**
   * Is the subject today?
   *
   * @method today
   * @param {Date} subject
   */
  today: function(x) {
    return is.date(x) && !sortDates(x)
  },

  /**
   * Is the subject a date in the future, or in the future of the provided standard?
   * Does not test date times.
   *
   * @method futureDate
   * @param {Date} subject, required
   * @param {Date} standard, optional
   */
  futureDate: function(x, y) {
    return is.date(x) && sortDates(x, y) > 0
  },

  /**
   * Is the subject a date in the past, or in the past of the provided standard?
   * Does not test date times.
   *
   * @method pastDate
   * @param {Date} subject
   * @param {Date} standard, optional
   */
  pastDate: function(x, y) {
    return is.date(x) && sortDates(x, y) < 0
  }

}


// ALIASES

is.required = is.present

is.eq     = is.equal
is.gt     = is.greaterThan
is.gte    = is.greaterThanOrEqualTo
is.lt     = is.lessThan
is.lte    = is.lessThanOrEqualTo
is.inst   = is.instanceOf

is.lengthy = is.longerThan
is.minlength = is.longerThanOrEqualTo
is.maxlength = is.shorterThanOrEqualTo


is.fn     = is.func
is.bool   = is.boolean

is.obj    = is.object
is.arr    = is.array
is.rx     = is.regex

is.str    = is.string
is.emtStr = is.emptyString

is.numstr = is.numberString
is.intstr = is.integerString
is.num    = is.number
is.int    = is.integer
is.hex    = is.hexadecimal
is.hexStr = is.hexstr = is.hexadecimalString

is.past   = is.pastDate
is.future = is.futureDate


// ANTONYMS

/**
 * Creates `is.not` object and attaches all existing methods to it.
 * They return the opposite of their `is.methodName` counterparts.
 */
var isnt = is.not = {}
var method
for (method in is) {
  // grab all methods except toThing helpers
  if (is.hasOwnProperty(method) && typeof is[method] == 'function') {
    isnt[method] = (function(method){
      return function(){
        return !is[method].apply(is, arguments)
      }
    })(method)
  }
}


// PUBLIC HELPERS

/**
 * Attempts to convert subject to an integer.
 * Will cast `NaN` to `null` because you can still do math with `null`.
 *
 * @method toInteger
 * @param {Object} subject, required
 */
is.toInt = is.toInteger = function(x) {
  var y = parseInt(x,10)
  return isNaN(y) ? null : y
}

/**
 * Attempts to convert subject to a number.
 * Will cast `NaN` to `null` because you can still do math with `null`.
 *
 * @method toNumber
 * @param {Object} subject, required
 */
is.toNum = is.toNumber = function(x) {
  var y = parseFloat(x)
  return isNaN(y) ? null : y
}




module.exports = is
