import "./Hero.css"

export class Hero extends HTMLElement {
  static tagName = "x-hero"
  constructor() {
    super()
    this.dataVal = {}
    this.loading = true
  }

  connectedCallback() {}

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
              <x-image alt="${dataVal.primaryImageAlt}" src="${dataVal.primaryImage}" size="hero"></x-image>
              <span class="text-box">
                  <h2>${dataVal.title}</h2>
                  <p>${dataVal.excerpt}</p>
              </span>
            </a>
        </x-column>
    </x-row>
        `
  }
}
