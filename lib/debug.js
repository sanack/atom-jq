/** @babel */
/* global atom */

export const isAtomInDebugMode = () => {
  return atom.devMode
}

export const log = (args) => {
  if (isAtomInDebugMode()) {
    console.log(args)
  }
}

export const clear = () => {
  if (isAtomInDebugMode()) {
    console.clear()
  }
}
