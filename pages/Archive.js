import { getPostData } from "../lib/getPostData.js"

export class Archive extends HTMLElement {
  constructor() {
    super()
    this.postData = []
    this.postDataSorted = []
  }

  async connectedCallback() {
    this.innerHTML = `<x-row><x-column><p class="loading">Loading...</p></x-column></x-row>`
    await this.loadData()
    this.render()
  }

  render() {
    this.innerHTML = ""
    this.innerHTML = `
    <x-skinny-card>test</x-skinny-card>
    `
    this.querySelector("x-skinny-card").data = this.postDataSorted
  }

  async loadData() {
    try {
      this.postData = await getPostData()
      this.postDataSorted = [...this.postData].sort((a, b) => new Date(b.date) - new Date(a.date))
    } catch (err) {
      this.innerHTML = `<x-row><x-column><p class="loading">Failed to load posts.</p></x-column></x-row>`
      console.error("Failed to load data: ", err)
    }
  }
}
