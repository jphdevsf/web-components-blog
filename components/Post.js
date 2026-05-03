export class Post extends HTMLElement {
  connectedCallback() {
    // const type = this.getAttribute('type')
    // const link = this.getAttribute('link')

    // save the children!
    const children = Array.from(this.childNodes)

    // create semantic parent
    const el = document.createElement("article")
    el.classList = "post blog"

    console.log("hi", this)
    // el.setAttribute('data-component-name', componentName);

    // semantic parent adopts the children
    children.forEach(c => {
      el.append(c)
    })

    // // bye bye custom non-semantic element
    // this.replaceWith(el);
  }
}
