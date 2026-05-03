import { toKebabCase } from "./../lib/utils.js"

export class Router {
  constructor(target) {
    this.staticRoutes = [
      { path: "/", component: "Home" },
      { path: "/home", component: "Home" },
      { path: "/about", component: "About" },
      { path: "/archive", component: "Archive" },
    ]
    this.dynamicRoutes = [
      { path: "/post/:slug", component: "PostPage" },
    ]
    this.fallback = { component: "Home" }
    this.targetEl = document.querySelector(target)
    this.params = {}

    window.addEventListener("popstate", () => this.resolve())
    document.addEventListener("click", e => {
      const btn = e.target.closest(".button.navigation")
      if (btn) {
        e.preventDefault()
        this.navigate(btn.pathname)
      }
    })
  }

  init() {
    this.resolve()
  }

  navigate(path) {
    history.pushState({}, "", path)
    this.resolve()
  }

  resolve() {
    const path = location.pathname
    this.params = {}

    const staticRoute = this.staticRoutes.find(r => r.path === path)
    if (staticRoute) {
      this.render(staticRoute.component)
      return
    }

    const { route, params } = this.matchDynamic(path)
    if (route) {
      this.params = params
      this.render(route.component, params)
      return
    }

    this.render(this.fallback.component)
  }

  matchDynamic(path) {
    const pathParts = path.split("/")

    for (const route of this.dynamicRoutes) {
      const routeParts = route.path.split("/")
      if (routeParts.length !== pathParts.length) continue

      const params = {}
      const match = routeParts.every((part, i) => {
        if (part.startsWith(":")) {
          params[part.slice(1)] = pathParts[i]
          return true
        }
        return part === pathParts[i]
      })

      if (match) return { route, params }
    }

    return { route: null, params: {} }
  }

  render(component, params = {}) {
    const componentName = `x-${toKebabCase(component)}`
    const attrs = Object.entries(params)
      .map(([key, val]) => `${key}="${val}"`)
      .join(" ")
    this.targetEl.innerHTML = `<${componentName} ${attrs}></${componentName}>`
  }
}
