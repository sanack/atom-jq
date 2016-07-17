/** @babel */
/* global atom */

describe('atom-jq export', () => {
  let mainModule = null

  beforeEach((done) => {
    waitsForPromise(() => {
      return atom.packages.activatePackage('atom-jq').then((pack) => {
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
})
