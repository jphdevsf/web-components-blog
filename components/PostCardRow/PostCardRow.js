import { card } from "../../lib/imageUrl.js"
import { loadCSS } from "../../lib/loadCSS.js"

export class PostCardRow extends HTMLElement {
  constructor() {
    super()
    this.dataVal = []
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
                        <a class="card" href="/post/${p.slug}">
                        <x-image alt="${p.primaryImageAlt}" src="${p.primaryImage}" size="card"></x-image>
                        <span>
                            <h2>${p.title}</h2>
                            <p>${p.excerpt}</p>
                        </span>
                        </a>
                    </x-column>
                    `
          })
          .join("")}
        </x-row>
    `
  }
}
