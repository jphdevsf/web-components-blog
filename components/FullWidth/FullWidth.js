import { loadCSS } from "../../lib/loadCSS.js"

export class FullWidth extends HTMLElement {
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }

  connectedCallback() {
    loadCSS(this)
    this.render()
  }

  render() {
    this.innerHTML = `
    <x-row>
        <x-column>
            <h1>Welcome!</h1>
            <p>You've found a blog documenting the adventures of four related companions who's names all happen to start with J. Secretly this is dev project for big daddy J to get more accustomed with JS Web Components, but don't that stop from enjoying all this great content! :)
        </x-column>
    </x-row>
        `
  }
}
