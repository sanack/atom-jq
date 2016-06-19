/** @babel */

class BottomPanel {
  constructor (state) {
    this.data = state
    this.element = document.createElement('div')
    this.message = document.createElement('span')

    this.element.classList.add('atom-jq')

    this.element.appendChild(this.message)
  }

  serialize () {
    return {
      data: this.data
    }
  }

  destroy () {
    this.element.remove()
  }

  getElement () {
    return this.element
  }

  doSomethingWithData () {}
}

export default BottomPanel
