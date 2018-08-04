
module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "rules": {
    "indent": ["error", 2],
    "no-console": process.env.NODE_ENV === "development" ? 0 : 1,
    "no-undef": process.env.NODE_ENV === "development" ? 0 : 1,    
    "import/no-unresolved": [
      "error",
      {
        "ignore": [ "worker_threads" ]
      }
    ]
  }
}
