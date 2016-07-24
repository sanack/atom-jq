/** @babel */

import constants from './constants'

describe(constants.PACKAGE_NAME + ' export', () => {
  var mainModule = null

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage(constants.PACKAGE_NAME).then((pack) => {
        mainModule = pack.mainModule
        return
      })
    })
  })

  it('have the correct properties', () => {
    expect(mainModule).toBeDefined()
    expect(mainModule).toBeTruthy()
    expect(mainModule.activate).toBeDefined()
    expect(mainModule.deactivate).toBeDefined()
  })

  it('should be activated', () => {
    expect(atom.packages.isPackageActive(constants.PACKAGE_NAME)).toBe(true)
  })

  // it('should deactivate', () => {
  //   waitsForPromise(() => {
  //     return atom.packages.deactivatePackage('atom-jq').then((pack) => {
  //       mainModule = pack.mainModule
  //       return
  //     })
  //   })
  //   expect(atom.packages.isPackageActive('atom-jq')).toBe(true)
  // })
})
