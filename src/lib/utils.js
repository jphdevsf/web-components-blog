export const tagName = ComponentClass => ComponentClass.tagName

export const defineWebComponents = components => {
  components.forEach(c => {
    console.log(tagName(c))
    customElements.define(tagName(c), c)
  })
}
