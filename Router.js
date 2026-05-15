import { defineWebComponents, tagName } from "./lib/utils.js"
export class Router {
  constructor(config) {
    const { target, staticRoutes, dynamicRoutes } = config

    this.staticRoutes = staticRoutes
    this.dynamicRoutes = dynamicRoutes
    this.notFoundRoute = staticRoutes.find(r => r.path === "/404")

    this.targetEl = document.querySelector(target)

    if (!this.targetEl) throw new Error(`Router: target "${target}" not found`)

    const allPageComponents = [...new Set([...staticRoutes, ...dynamicRoutes].map(r => r.component))]
    defineWebComponents(allPageComponents)

    window.addEventListener("popstate", () => this.resolve())

    document.addEventListener("click", e => {
      const link = e.target.closest("a[href]")
      if (link && link.origin === location.origin) {
        e.preventDefault()
        this.navigate(link.pathname)
      }
    })

    document.addEventListener("route-not-found", () => {
      history.replaceState({}, "", "/404")
      this.renderRoute(this.notFoundRoute, "static")
    })

    this.resolve()
  }

  navigate(path) {
    history.pushState({}, "", path)
    this.resolve()
  }

  resolve() {
    const path = location.pathname

    const staticRoute = this.staticRoutes.find(r => r.path === path)
    const dynamicRoute = this.dynamicRoutes.find(r => path.startsWith(r.pathPrefix))

    const route = staticRoute || dynamicRoute
    if (!route) {
      history.replaceState({}, "", "/404")
      this.renderRoute(this.notFoundRoute, "static")
      return
    }
    const type = staticRoute ? "static" : "dynamic"
    const slug = dynamicRoute && path.slice(dynamicRoute.pathPrefix.length)
    this.renderRoute(route, type, slug)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  renderRoute(route, type, slug) {
    const componentName = tagName(route.component)
    if (type === "static") this.targetEl.innerHTML = `<${componentName} class="${type} route"></${componentName}>`
    if (type === "dynamic") this.targetEl.innerHTML = `<${componentName} slug="${slug}" class="${type} route"></${componentName}>`
  }
}
