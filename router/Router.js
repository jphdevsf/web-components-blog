import { toKebabCase } from "../lib/utils.js"
import { dynamicRoutes, staticRoutes } from "./routes.js"

export class Router {
  constructor(target) {
    this.staticRoutes = staticRoutes

    this.dynamicRoutes = dynamicRoutes

    this.targetEl = document.querySelector(target)
    if (!this.targetEl) throw new Error(`Router: target "${target}" not found`)

    window.addEventListener("popstate", () => this.resolve())

    document.addEventListener("click", e => {
      const link = e.target.closest("a[href]")
      if (link && link.origin === location.origin) {
        e.preventDefault()
        this.navigate(link.pathname)
      }
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
      this.targetEl.innerHTML = `<x-row><x-column>Bad route!</x-column></x-row>`
      return
    }
    const type = staticRoute ? "static" : "dynamic"
    const componentName = `x-${toKebabCase(route.component)}`
    const slug = dynamicRoute && path.slice(dynamicRoute.pathPrefix.length)
    if (staticRoute) this.targetEl.innerHTML = `<${componentName} class="${type} route"></${componentName}>`
    if (dynamicRoute) this.targetEl.innerHTML = `<${componentName} slug="${slug}" class="${type} route"></${componentName}>`

    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
