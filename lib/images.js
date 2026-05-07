const CLOUD = "drasvfxdz"
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`
const build = (publicId, transforms = "") => `${BASE}/${transforms}/${publicId}`
export const thumbnail = id => build(id, "f_auto,w_400,ar_1:1,q_50,c_fill")
export const card = id => build(id, "f_auto,w_616,ar_3:4,q_50,c_fill")
export const hero = id => build(id, "f_auto,w_1976,ar_16:9,q_50,c_fill")
export const post = id => build(id, "f_auto,w_600,ar_3:4,q_50,c_fill")
