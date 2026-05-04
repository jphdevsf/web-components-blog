import { Button } from "./components/Button.js"
import { Column, Footer, Header, Main, Row } from "./components/Layout.js"
import { toKebabCase } from "./lib/utils.js"
import { About } from "./pages/About.js"
import { Archive } from "./pages/Archive.js"
import { Home } from "./pages/Home.js"
import { Post } from "./pages/Post.js"
import { Router } from "./router/Router.js"

const components = [Header, Footer, Main, Row, Column, Button, Home, About, Archive, Post]

const app = async () => {
  components.forEach(c => {
    customElements.define(`x-${toKebabCase(c.name)}`, c)
  })
  const router = new Router("main")
}

document.addEventListener("DOMContentLoaded", app)
