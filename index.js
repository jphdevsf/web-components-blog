import { Button } from "./components/Button.js"
import { Column, Footer, Header, Main, Row } from "./components/Layout.js"
import { Post } from "./components/Post.js"
import { Router } from "./components/Router.js"
import { toKebabCase } from "./lib/utils.js"
import { About, Archive, Home } from "./pages.js"

const components = [Header, Footer, Main, Row, Column, Post, Button, Home, About, Archive]

const loadPosts = async () => {
  const res = await fetch("./data/posts.json")
  const { posts } = await res.json()
  posts.forEach(post => {
    // create a template for each post
    const template = document.createElement("template")
    template.id = `post-${post.slug}-template`
    template.innerHTML = `
      <x-row>
        <x-column>
          <h1>${post.title}</h1>
          <p>${post.date} · ${post.tags.join(", ")}</p>
        </x-column>
      </x-row>
    `
    document.body.appendChild(template)
  })
}

const app = () => {
  components.forEach(c => {
    customElements.define(`x-${toKebabCase(c.name)}`, c)
  })
  const router = new Router("main")
  router.init()

  loadPosts()
}

document.addEventListener("DOMContentLoaded", app)
