import "./Post.css"

export class Post extends HTMLElement {
  static tagName = "x-post"
  async connectedCallback() {
    this.slug = this.getAttribute("slug")
    this.render()
  }

  render() {
    this.innerHTML = `
      <x-post-body slug="${this.slug}"></x-post-body>
    `
  }
}
