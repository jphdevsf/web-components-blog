import { getPostData } from "../lib/getPostData.js"
import { post } from "../lib/images.js"

export class Legal extends HTMLElement {
  constructor() {
    super()
    this.postHtml = ""
    this.loading = true
    this.postData = []
  }

  async connectedCallback() {
    this.slug = this.getAttribute("slug")
    this.render()
    await this.loadData()
    this.renderPost()
  }

  render() {
    if (this.loading) {
      this.innerHTML = `<x-row><x-column><p class="loading">Loading...</p></x-column></x-row>`
    } else {
      this.innerHTML = this.postHtml
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

  renderPost() {
    const p = this.postData.find(p => p.slug === this.slug)
    const bodyHtml = p.body
      .map(item => {
        if (item.type === "paragraph") return `<p>${item.content}</p>`
        if (item.type === "image") return `<img src="${post(item.src)}" alt="${item.alt}" />`
        return ""
      })
      .join("")

    this.postHtml = `
    <x-row>
        <x-column>
            <span class="back-button">
              <a href="/">BACK ></a>
            </span>
        </x-column>
        <x-column>
        <article>
            <h1>${p.title}</h1>
            <p>${p.date}</p>
        <span class="post-body">
            ${bodyHtml}
        </span>
        </article>
      </x-column>
      <x-column>
            <span class="back-button">
              <a href="/">BACK ></a>
            </span>
        </x-column>
    </x-row>
    `

    this.loading = false
    this.render()
  }
}
