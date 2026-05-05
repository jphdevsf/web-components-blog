const CLOUD = "drasvfxdz"
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`
const build = (publicId, transforms = "") => `${BASE}/${transforms}/${publicId}`
export const thumbnail = id => build(id, "f_auto,w_400,h_300,c_fill")
export const card = id => build(id, "f_auto,w_600,h_400,c_fill")
export const hero = id => build(id, "f_auto,w_1600,h_900,c_fill")
export const fullSize = id => build(id, "f_auto,w_800,q_auto")
export const gallery = id => build(id, "f_auto,w_300,h_200,c_fill")
export const original = id => build(id, "f_auto,q_auto")
