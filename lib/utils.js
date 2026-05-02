export const toKebabCase = str => str.replace(/([A-Z])/g, (match, _p, index) => (index ? '-' : '') + match.toLowerCase());
