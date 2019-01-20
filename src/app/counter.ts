import * as Quill from 'quill'

export interface Config {
  container: string
  unit: 'word'|'char'
}

export interface QuillInstance {
  on: Function
  getText: Function
}

export default class Counter {
  quill: QuillInstance
  options: Config

  constructor(quill, options) {
    this.quill = quill
    this.options = options

    const container = document.querySelector(this.options.container)

    this.quill.on('text-change', () => {
      var length = this.calculate()

      container.innerHTML = length + ' ' + this.options.unit + 's'
    })
  }

  calculate() {
    const text = this.quill.getText().trim()

    if (this.options.unit === 'word') {
      return !text ? 0 : text.split(/\s+/).length
    }
    return text.length
  }
}
