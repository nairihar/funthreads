[![Build Status](https://travis-ci.org/nairihar/function-threads.svg?branch=master)](https://travis-ci.org/nairihar/function-threads)
[![Coverage Status](https://coveralls.io/repos/github/nairihar/function-threads/badge.svg?branch=master)](https://coveralls.io/github/nairihar/function-threads?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/nairihar/shared/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nairihar/shared?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/58a6979fd059a021b05e/maintainability)](https://codeclimate.com/github/nairihar/function-threads/maintainability)
[![npm version](https://badge.fury.io/js/function-threads.svg)](https://www.npmjs.com/package/function-threads)

# Function Threads
Additional layer for Node.js's "worker_threads" module.

Library provides `run` function, which takes an callback as argument, and runs it in a thread. It returns a promise, inside callback you can return promise or plain value(i.e. object, string and etc...).

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

Make sure you're using Node.js >= v10.5.0

And always use `--experimental-worker` flag when you run project, because under the hood implemented [worker-threads](https://nodejs.org/api/worker_threads.html) which is in Experimental mode.
```shall
$ node --experimental-worker  index.js
```

Example [_basic/index.js_](https://github.com/nairihar/function-threads/blob/master/examples/basic/index.js):

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

```shell
$ node --experimental-worker  index.js
```

### All examples:
- [Basic](https://github.com/nairihar/function-threads/tree/master/examples/basic)
- [Run thread with custom data](https://github.com/nairihar/function-threads/blob/master/examples/run_thread_with_custom_data/index.js)
- [Async thread](https://github.com/nairihar/function-threads/blob/master/examples/async_thread/index.js)
- [Error handling](https://github.com/nairihar/function-threads/blob/master/examples/error_in_thread/index.js)
