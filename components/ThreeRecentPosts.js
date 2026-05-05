import { hero } from "../lib/images.js"

export class ThreeRecentPosts extends HTMLElement {
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }
  set data(value) {
    this.dataVal = value
    this.render()
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
                        <img src="${hero(p.primaryImage)}" />
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
