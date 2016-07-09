// import test from 'tape'
// import atomJq from './../src'
//
// test('atom-jq export', (assert) => {
//   assert.equal(
//     atomJq.hasOwnProperty('activate'),
//     true,
//     'should have a activate property'
//   )
//
//   assert.equal(
//     atomJq.hasOwnProperty('deactivate'),
//     true,
//     'should have a deactivate property'
//   )
//
//   assert.end()
// })

// const atomJq = require('../../lib')
//
// describe('#atom-jq export', () => {
//   it('should have a activate property', () => {
//     expect(atomJq.hasOwnProperty('activate')).toBe(true)
//   })
//
//   it('should have a activate property', () => {
//     expect(atomJq.hasOwnProperty('activate')).toBe(true)
//   })
// })

describe('#atom-jq', () => {
  it('', () => {
    atom.packages.activatePackage('atom-jq').then((args) => {
      console.log('...args', ...args)
    })
  })

})
