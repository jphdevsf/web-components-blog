const CLOUD = "drasvfxdz"
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`
const build = (publicId, transforms = "") => `${BASE}/${transforms}/${publicId}`

const thumbnail = id => build(id, "f_auto,w_400,ar_1:1,q_50,c_fill")
const card = id => build(id, "f_auto,w_616,ar_1:1,q_50,c_fill")
const hero = id => build(id, "f_auto,w_1976,ar_16:9,q_50,c_fill")
const post = id => build(id, "f_auto,w_1600,ar_16:9,q_50,c_fill")
const fallback = id => build(id, "q_80")

export { card, fallback, hero, post, thumbnail }
