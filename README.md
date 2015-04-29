# is-too

A simple type checker slash validation module striving for code minimalism and a thorough test suite.

The primary use case for `is-too` is validating input from a form.


## Installation

```
npm install is-too
```

## Usage

```javascript
var is = require('is-too')

var metal = "666" // |..|.  .|..|

if (is.present(metal) && is.integer(metal)) {
  headBang()
}
```

## Checks


* Operators
  * `present`
  * `equal`
  * `unequal`
  * `exactly`
  * `notExactly`
  * `greaterThan`
  * `greaterThanOrEqualTo`
  * `lessThan`
  * `lessThanOrEqualTo`
  * `instanceOf`
* Primitives
  * `boolean`
  * `nil`
  * `undef`
  * `false`
  * `falsy`
  * `true`
  * `truthy`
* Objects
  * `object`
  * `plainObject`
  * `args`
  * `array`
  * `func`
* Regular Expressions
  * `regex`
  * `match`
* Strings
  * `string`
  * `emptyString`
* Numbers
  * `number`
  * `numberString`
  * `integer`
  * `integerString`
  * `hexadecimal`
  * `hexadecimalString`
  * `zero`
  * `zeroString`
* Dates
  * `date`
  * `sameDate`
  * `today`
  * `futureDate`
  * `pastDate`


### Antonyms

`is.not[methodName]` will return the inverse all methods.

```javascript
is.not.greaterThan(1, 2) // true : 1 is not greater than 2
```

## Helpers

* `toInteger`, `toInt`: converts a number to an integer, and `NaN` to `null` because you can do math with `null`.
* `toNumber`, `toNum`: same as `toInt`, but respects decimals.
