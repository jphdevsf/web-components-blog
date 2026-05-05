import { getPostData } from "../lib/getPostData.js"
// import { hero } from "../lib/images.js"

export class Home extends HTMLElement {
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
    <x-hero>test</x-hero>
    <x-three-recent-posts>test</x-three-recent-posts>
    `
    this.querySelector("x-hero").data = this.postDataSorted[0]
    this.querySelector("x-three-recent-posts").data = this.postDataSorted.filter((_p, i) => i > 0 && i < 4)
  }

  async loadData() {
    try {
      this.postData = await getPostData()
      this.postDataSorted = [...this.postData].sort((a, b) => new Date(b.date) - new Date(a.date))
      console.log(this.postData, this.postDataSorted)
    } catch (err) {
      this.innerHTML = `<x-row><x-column><p class="loading">Failed to load posts.</p></x-column></x-row>`
      console.error("Failed to load data: ", err)
    }
  }
}
