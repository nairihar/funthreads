[![Build Status](https://travis-ci.org/nairihar/function-threads.svg?branch=master)](https://travis-ci.org/nairihar/function-threads)
[![Coverage Status](https://coveralls.io/repos/github/nairihar/function-threads/badge.svg?branch=master)](https://coveralls.io/github/nairihar/function-threads?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/nairihar/shared/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nairihar/shared?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/58a6979fd059a021b05e/maintainability)](https://codeclimate.com/github/nairihar/function-threads/maintainability)

# Function Threads
Additional layer for Node.js "worker_threads" module.

Library provides "run" function, which takes an callback as argument, and runs it in a thread. It returns a promise, inside callback you can return promise or plain value(i.e. object, string and etc...).

## Installation


Using npm:
```shell
$ npm i --save function-threads
```

Using yarn:
```shell
$ yarn add function-threads
```

## Example
```javascript
const Thread = require('function-threads');

Thread.run(() => 2 ** 10)
  .then((num) => {
    console.log(`Result: ${num}`);
  })
  .catch((err) => {
    console.error(err);
  });
```
