import test from 'tape'
import atomJq from './../lib'

test('atom-jq export', (assert) => {
  assert.equal(
    atomJq.hasOwnProperty('activate'),
    true,
    'should have a activate property'
  )

  assert.equal(
    atomJq.hasOwnProperty('deactivate'),
    true,
    'should have a deactivate property'
  )

  assert.end()
})
