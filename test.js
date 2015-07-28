const test = require('tape')
const createFsa = require('./')

test('should assert input values', function (t) {
  t.plan(1)
  t.throws(createFsa, /string/)
})

test('should have a default payload function', function (t) {
  t.plan(1)
  const creator = createFsa('derp')
  t.deepEqual(creator(), {
    type: 'derp',
    payload: undefined
  })
})

test('should accept a custom payload function', function (t) {
  t.plan(1)
  const creator = createFsa('derp', { payload: payloadFn })
  t.deepEqual(creator(3), {
    type: 'derp',
    payload: 9
  })

  function payloadFn (val) {
    return val * val
  }
})

test('should accept a meta function', function (t) {
  t.plan(1)
  const creator = createFsa('derp', {
    meta: metaFn
  })
  t.deepEqual(creator(3), {
    type: 'derp',
    payload: 3,
    meta: 'hello'
  })

  function metaFn (val) {
    return 'hello'
  }
})

test('should accept an error function', function (t) {
  t.plan(1)
  const creator = createFsa('derp', {
    error: errorFn
  })
  t.deepEqual(creator(3), {
    type: 'derp',
    payload: 3,
    error: true
  })

  function errorFn (val) {
    return true
  }
})
