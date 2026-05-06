import { Button } from "./components/Button.js"
import { Hero } from "./components/Hero/Hero.js"
import { Column, Footer, Header, Main, Row } from "./components/Layout.js"
import { SkinnyCard } from "./components/SkinnyCard/SkinnyCard.js"
import { ThreeRecentPosts } from "./components/ThreeRecentPosts/ThreeRecentPosts.js"
import { toKebabCase } from "./lib/utils.js"
import { About } from "./pages/About.js"
import { Archive } from "./pages/Archive.js"
import { Home } from "./pages/Home.js"
import { Post } from "./pages/Post.js"
import { Router } from "./router/Router.js"

const components = [Header, Footer, Main, Row, Column, Button, Home, About, Archive, Post, Hero, ThreeRecentPosts, SkinnyCard]

const app = async () => {
  components.forEach(c => {
    console.log(`x-${toKebabCase(c.name)}`)
    customElements.define(`x-${toKebabCase(c.name)}`, c)
  })
  const router = new Router("main")
}

document.addEventListener("DOMContentLoaded", app)
