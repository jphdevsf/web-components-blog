import { card, fallback, hero, post, thumbnail } from "../../lib/imageUrl.js"
import { loadCSS } from "../../lib/loadCSS.js"

const imageSizes = { card, hero, post, thumbnail, fallback }

export class Image extends HTMLElement {
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }

  connectedCallback() {
    loadCSS(this)
    this.render()
  }

  render() {
    const size = this.getAttribute("size")
    const src = this.getAttribute("src")
    const url = imageSizes[size] || fallback
    const attributes = Array.from(this.attributes)
      .filter(a => a.name !== "size" && a.name !== "src")
      .map(a => `${a.name}="${a.value}"`)
      .join(" ")

    this.innerHTML = `
        <img src="${url(src)}" ${attributes} />
    `
  }
}
