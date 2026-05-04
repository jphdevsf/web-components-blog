export const getPostData = async () => {
  const res = await fetch("./../data/posts.json")
  const { posts } = await res.json()
  return posts
}
