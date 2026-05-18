import "./PostCardRow.css"

export class PostCardRow extends HTMLElement {
  static tagName = "x-post-card-row"
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
    this.innerHTML = `
        <x-row>
        ${this.dataVal
          .map(p => {
            return `
                    <x-column>
                        <a class="card" href="/post/${p.slug}">
                        <x-image alt="${p.primaryImageAlt}" src="${p.primaryImage}" size="card"></x-image>
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
