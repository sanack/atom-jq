/** @babel */

import atomJq from './../lib'

describe('#atom-jq export', () => {
  it('should have a activate property', () => {
    expect(atomJq.hasOwnProperty('activate')).toBe(true)
  })

  it('should have a activate property', () => {
    expect(atomJq.hasOwnProperty('activate')).toBe(true)
  })
})

describe('#atom-jq', () => {
  it('', () => {
    atom.packages.activatePackage('atom-jq').then((args) => {
      console.log('...args', ...args)
    })
  })
})
