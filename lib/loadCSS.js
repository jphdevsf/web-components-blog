const loadCSS = (instance, path = "/components/") => {
  if (instance.constructor._cssLoaded) return
  const link = document.createElement("link")
  link.rel = "stylesheet"
  const name = instance.constructor.name
  link.href = `${path}${name}/${name}.css`
  document.head.appendChild(link)
  instance.constructor._cssLoaded = true
}

export { loadCSS }
