# create-fsa
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create a
[flux-standard-action](https://github.com/acdlite/flux-standard-action) from a
value.

## Installation
```bash
$ npm install create-fsa
```

## Usage
```js
const createFsa = require('create-fsa')

const square('square', {
  payload: val => val * val,
  meta: val => { original: val },
  error: val => val >= 0
})

square(3)
// => {
// =>   type: 'square',
// =>   payload: 9,
// =>   meta: { original: 3 },
// =>   error: false
// => }
```

## API
### creator = createFsa(type, fns)
Create an action creator with a type. Takes an optional object of functions to
create FSA properties (`payload`, `meta`, `error`). If no `payload`
function is passed, the payload defaults to the passed in value.

### fsa = creator(value)
Create a [flux-standard-action](https://github.com/acdlite/flux-standard-action)
from a value.

## See Also
- [flux-standard-action](https://github.com/acdlite/flux-standard-action) - human-friendly standard for Flux action objects
- [barracks](https://github.com/yoshuawuyts/barracks) - action dispatcher for unidirectional data flows

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/create-fsa.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-fsa
[travis-image]: https://img.shields.io/travis/yoshuawuyts/create-fsa/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/create-fsa
[codecov-image]: https://img.shields.io/codecov/c/githubyoshuawuyts/create-fsa/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/create-fsa
[downloads-image]: http://img.shields.io/npm/dm/create-fsa.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/create-fsa
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
