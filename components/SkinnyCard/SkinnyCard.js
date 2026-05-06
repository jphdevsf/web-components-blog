import { thumbnail } from "../../lib/images.js"
import { loadCSS } from "../../lib/loadCSS.js"

export class SkinnyCard extends HTMLElement {
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }
  set data(value) {
    this.dataVal = value
    this.render()
  }
  connectedCallback() {
    loadCSS(this)
  }
  render() {
    const { dataVal } = this
    this.innerHTML = `
        <x-row>
        ${this.dataVal
          .map(p => {
            return `
              <x-column>
                <article>
                <a class="card skinny" href="/post/${p.slug}">
                  <img src="${thumbnail(p.primaryImage)}" />
                  <span>
                    <h2>${p.title}</h2>
                    <p>${p.excerpt}</p>
                  </span>
                </a>
                </article>
              </x-column>
            `
          })
          .join("")}
        </x-row>
    `
  }
}
