const toKebabCase = capitalCaseStr => capitalCaseStr.replace(/([A-Z])/g, (match, _p, index) => (index ? "-" : "") + match.toLowerCase())

/**
 * Converts component name to web component friendly kebab case HTML tag name.
 * @param { class } ComponentClass
 * @return { string } a web component compliant string to use as custom HTML tag name.
 */
export const tagName = ComponentClass => `x-${toKebabCase(ComponentClass.name)}`

export const defineWebComponents = components => {
  components.forEach(c => {
    console.log(tagName(c))
    customElements.define(tagName(c), c)
  })
}
