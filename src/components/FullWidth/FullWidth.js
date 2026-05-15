import "./FullWidth.css"

export class FullWidth extends HTMLElement {
  static tagName = "x-full-width"
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }

  connectedCallback() {
    const children = Array.from(this.childNodes)
    children.forEach(c => {
      this.append(c)
    })
  }
}
