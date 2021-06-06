module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  "rules": {
    "indent": ["error", 2],
    "no-console": process.env.NODE_ENV === "development" ? 0 : 1,
    "no-undef": process.env.NODE_ENV === "development" ? 0 : 1,
    "global-require": "off"
  }
}
