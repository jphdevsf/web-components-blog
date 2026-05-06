import { hero } from "../../lib/images.js"
import { loadCSS } from "../../lib/loadCSS.js"

export class Hero extends HTMLElement {
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }

  connectedCallback() {
    loadCSS(this)
  }

  set data(value) {
    this.dataVal = value
    this.render()
  }

  render() {
    const { dataVal } = this
    this.innerHTML = `
    <x-row>
        <x-column>
            <a class="hero" href="/post/${dataVal.slug}">
            <img src="${hero(dataVal.primaryImage)}" />
            <span>
                <h2>${dataVal.title}</h2>
                <p>${dataVal.excerpt}</p>
            </span>
            </a>
        </x-column>
    </x-row>
        `
  }
}
