import { FullWidth } from "../components/FullWidth/FullWidth.js"
import { Hero } from "../components/Hero/Hero.js"
import { PostCardRow } from "../components/PostCardRow/PostCardRow.js"
import { getPostData } from "../lib/getPostData.js"
import { tagName } from "../lib/utils.js"
export class Home extends HTMLElement {
  static tagName = "x-home"
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
    <${tagName(FullWidth)}>
      <x-row>
          <x-column>
              <h1>Welcome!</h1>
              <p>You've found a blog documenting the adventures of four related companions who's names all happen to start with J. Secretly this is dev project for big daddy J to get more accustomed with JS Web Components, but don't that stop from enjoying all this great content! :)</p>
          </x-column>
      </x-row>
    </${tagName(FullWidth)}>
    <${tagName(Hero)}></${tagName(Hero)}>
    <${tagName(PostCardRow)}></${tagName(PostCardRow)}>
    `
    this.querySelector(tagName(Hero)).data = this.postDataSorted[0]
    this.querySelector(tagName(PostCardRow)).data = this.postDataSorted.filter((_p, i) => i > 0 && i < 4)
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
