export class NotFound extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "404 Not Found!"
  }
}
