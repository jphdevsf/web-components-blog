import { Button } from "./components/Button.js"
import { FullWidth } from "./components/FullWidth/FullWidth.js"
import { Header } from "./components/Header/Header.js"
import { Hero } from "./components/Hero/Hero.js"
import { Image } from "./components/Image/Image.js"
import { Column, Footer, Main, Row } from "./components/Layout.js"
import { PostBody } from "./components/PostBody/PostBody.js"
import { PostCardRow } from "./components/PostCardRow/PostCardRow.js"
import { PostListSkinny } from "./components/PostListSkinny/PostListSkinny.js"
import { defineWebComponents } from "./lib/utils.js"
import { About } from "./pages/About.js"
import { Archive } from "./pages/Archive/Archive.js"
import { Home } from "./pages/Home.js"
import { Legal } from "./pages/Legal.js"
import { NotFound } from "./pages/NotFound/NotFound.js"
import { Post } from "./pages/Post/Post.js"
import { Router } from "./Router.js"

const components = [Header, Footer, Main, Row, Column, Button, Hero, PostCardRow, PostListSkinny, Image, FullWidth, PostBody]

const routerConfig = {
  target: "main",
  staticRoutes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/archive", component: Archive },
    { path: "/404", component: NotFound }
  ],
  dynamicRoutes: [
    { pathPrefix: "/post/", component: Post },
    { pathPrefix: "/legal/", component: Legal }
  ]
}

const app = async () => {
  defineWebComponents(components)
  new Router(routerConfig)
}

document.addEventListener("DOMContentLoaded", app)
