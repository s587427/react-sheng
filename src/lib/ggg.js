
const arr = ['test.js', 'test2.js']

const a = require.context('../lib', false, /\.js$/)
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}


importAll(a)

export default cache

