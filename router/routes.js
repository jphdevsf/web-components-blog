export const staticRoutes = [
  { path: "/", component: "Home" },
  { path: "/home", component: "Home" },
  { path: "/about", component: "About" },
  { path: "/archive", component: "Archive" }
]

export const dynamicRoutes = [
  { pathPrefix: "/post/", component: "Post" },
  { pathPrefix: "/legal/", component: "Legal" }
]
