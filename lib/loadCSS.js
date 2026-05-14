const loadCSS = instance => {
  if (instance.constructor._cssLoaded) return
  const link = document.createElement("link")
  link.rel = "stylesheet"
  const name = instance.constructor.name
  link.href = `/components/${name}/${name}.css`
  document.head.appendChild(link)
  instance.constructor._cssLoaded = true
}

const loadPageCSS = instance => {
  if (instance.constructor._cssLoaded) return
  const link = document.createElement("link")
  link.rel = "stylesheet"
  const name = instance.constructor.name
  link.href = `/pages/${name}/${name}.css`
  document.head.appendChild(link)
  instance.constructor._cssLoaded = true
}

export { loadCSS, loadPageCSS }
