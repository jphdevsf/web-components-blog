import { thumbnail } from "../../lib/imageUrl.js"
import "./PostListSkinny.css"

export class PostListSkinny extends HTMLElement {
  static tagName = "x-post-list-skinny"
  constructor() {
    super()
    this.dataVal = []
  }
  set data(value) {
    this.dataVal = value
    this.render()
  }
  connectedCallback() {}
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
