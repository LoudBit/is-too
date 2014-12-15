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

For now, check the source and tests for a full run down of how things work.


### Antonyms

`is.not[methodName]` will return the inverse all methods.

```javascript
is.not.greaterThan(1, 2) // true : 1 is not greater than 2
```

## Helpers

* `toInteger`, `toInt`: converts a number to an integer, and `NaN` to `null` because you can do math with `null`.
* `toNumber`, `toNum`: same as `toInt`, but respects decimals.
