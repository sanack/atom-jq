/** @babel */

import { PACKAGE_NAME } from './constants'

describe(`${PACKAGE_NAME} export`, () => {
  let mainModule = null

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage(PACKAGE_NAME).then((pack) => {
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
    expect(atom.packages.isPackageActive(PACKAGE_NAME)).toBe(true)
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
