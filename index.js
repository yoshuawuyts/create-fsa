const assert = require('assert')

module.exports = createFsa

// create an action creator with a type
// (str, fn?, fn?) -> fn
function createFsa (type, fns) {
  assert.equal(typeof type, 'string')
  fns = fns || {}

  return function (val) {
    const ret = {}
    ret.type = type
    ret.payload = fns.payload ? fns.payload(val) : val
    if (fns.meta) ret.meta = fns.meta(val)
    if (fns.error) ret.error = fns.error(val)
    return ret
  }
}
