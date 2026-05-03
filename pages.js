export class Home extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("home-page-template")
    const content = template.content.cloneNode(true)
    this.appendChild(content)
  }
}

export class About extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("about-page-template")
    const content = template.content.cloneNode(true)
    this.appendChild(content)
  }
}

export class Archive extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("archive-page-template")
    const content = template.content.cloneNode(true)
    this.appendChild(content)
  }
}
