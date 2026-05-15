import { getPostData } from "../../lib/getPostData.js"
import "./Archive.css"

export class Archive extends HTMLElement {
  static tagName = "x-archive"
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
    this.innerHTML = `
    <x-post-list-skinny></x-post-list-skinny>
    `
    this.querySelector("x-post-list-skinny").data = this.postDataSorted
  }

  async loadData() {
    try {
      this.postData = await getPostData()
      this.postDataSorted = [...this.postData].sort((a, b) => new Date(b.date) - new Date(a.date))
    } catch (err) {
      console.error(`Failed to load data for ${this.constructor.name}: `, err)
    }
  }
}
