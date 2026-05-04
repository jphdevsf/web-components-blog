import { getPostData } from "../lib/getPostData.js"
import { thumbnail } from "../lib/images.js"

export class Archive extends HTMLElement {
  constructor() {
    super()
    this.postHtml = ""
    this.loading = true
    this.postData = []
  }

  async connectedCallback() {
    this.render()
    await this.loadData()
    this.renderPostCards()
  }

  render() {
    if (this.loading) {
      this.innerHTML = `<x-row><x-column><p class="loading">Loading...</p></x-column></x-row>`
    } else {
      this.innerHTML = `<x-row>${this.postHtml}</x-row>`
    }
  }

  async loadData() {
    try {
      this.postData = await getPostData()
    } catch (err) {
      this.innerHTML = `<x-row><x-column><p class="loading">Failed to load posts.</p></x-column></x-row>`
      console.error("Failed to load data: ", err)
    }
  }

  renderPostCards() {
    this.postHtml = this.postData
      .map(
        p => `
          <x-column>
            <a class="card" href="/post/${p.slug}">
              <img src="${thumbnail(p.primaryImage)}" />
              <span>
                <h2>${p.title}</h2>
                <p>${p.excerpt}</p>
              </span>
            </a>
          </x-column>
        `
      )
      .join("")
    this.loading = false
    this.render()
  }
}
