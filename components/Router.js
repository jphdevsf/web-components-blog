import { toKebabCase } from './../lib/utils.js';

export class Router {
    constructor(routes, targetEl) {
        this.routes = routes;
        this.targetEl = targetEl;
        window.addEventListener('popstate', () => this.resolve())
    }

    navigate(path) {
        history.pushState({}, '', path);
        this.resolve()
    }

    resolve() {
        const path = location.pathname;
        const route = this.routes.find(r => r.path === path);
        console.log(route.component);
        const componentName = `x-${toKebabCase(route.component)}`
        if (route) this.targetEl.innerHTML = `<${componentName} class="jacob yup"></${componentName}>`
    }
}