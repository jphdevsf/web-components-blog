import { loadCSS } from "../../lib/loadCSS.js"

export class Header extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute("id")
    const config = this.getConfig()
    const { tag, classList, componentName } = config

    loadCSS(this)

    // save the children!
    const children = Array.from(this.childNodes)

    // create semantic parent
    const el = document.createElement(tag)
    el.classList = classList
    el.setAttribute("data-component-name", componentName)
    if (id) el.id = id

    // semantic parent adopts the children
    children.forEach(c => {
      el.append(c)
    })

    // bye bye custom non-semantic element
    this.replaceWith(el)
  }

  getConfig() {
    return {
      tag: "header",
      classList: "header",
      componentName: "x-header"
    }
  }
}
