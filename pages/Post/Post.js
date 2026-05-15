import { loadCSS } from "../../lib/loadCSS.js"

export class Post extends HTMLElement {
  async connectedCallback() {
    this.slug = this.getAttribute("slug")
    loadCSS(this, "/pages/")
    this.render()
  }

  render() {
    this.innerHTML = `
      <x-post-body slug="${this.slug}"></x-post-body>
    `
  }
}
