[![Build Status](https://travis-ci.org/nairihar/funthreads.svg?branch=master)](https://travis-ci.org/nairihar/funthreads)
[![Coverage Status](https://coveralls.io/repos/github/nairihar/funthreads/badge.svg?branch=master)](https://coveralls.io/github/nairihar/funthreads?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/nairihar/shared/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nairihar/shared?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/58a6979fd059a021b05e/maintainability)](https://codeclimate.com/github/nairihar/funthreads/maintainability)
[![npm version](https://badge.fury.io/js/funthreads.svg)](https://www.npmjs.com/package/funthreads)

# funthreads
Additional layer for Node.js "worker_threads" module.

Library provides `run` function, which takes a callback as an argument, runs it in a thread and returns a promise. Inside callback you can return promise or plain value(i.e. object, string and etc...).

## Installation


Using npm:
```shell
$ npm i --save funthreads
```

Using yarn:
```shell
$ yarn add funthreads
```

## Example

Make sure you're using Node.js >= v10.5.0

In case if you use an old version of node, where the `worker-threads` module is in experimental mode, then add `--experimental-worker` flag when you run project(details: [worker-threads](https://nodejs.org/api/worker_threads.html)).
```shall
$ node --experimental-worker  index.js
```

Example [_basic/index.js_](https://github.com/nairihar/funthreads/blob/master/examples/basic/index.js):

```javascript
const Thread = require('funthreads');

Thread.run(() => 2 ** 10)
  .then((num) => {
    console.log(`Result: ${num}`);
  })
  .catch((err) => {
    console.error(err);
  });
```

## All examples:
- [Basic](https://github.com/nairihar/funthreads/tree/master/examples/basic)
- [Run thread with custom data](https://github.com/nairihar/funthreads/blob/master/examples/run_thread_with_custom_data/index.js)
- [Async thread](https://github.com/nairihar/funthreads/blob/master/examples/async_thread/index.js)
- [Error handling](https://github.com/nairihar/funthreads/blob/master/examples/error_handling/index.js)
- [Work with FileSystem](https://github.com/nairihar/funthreads/blob/master/examples/work_with_file_system/index.js)

## API

### `Thread.run()`

#### Parameters
*(Function)*: Returns Promise, you can use `async/await` or just `then/catch` to get value.

*(object/array or primitive value)*: You can send custom data which will be used in a thread.
You can access to this data using `global.threadData` in function.

#### Returns
*(Promise)*: Returns Promise, you can use `async/await` or just `then/catch` to get value.

#### Important
```
You can't accesss to any data outside of function, if you need to use a module, you should
require it in a callback. The only way to accesss data in a callback from outside is the useage
of second parameter. Closures will not work here.
```

#### Example
Work with FileSystem [_index.js_](https://github.com/nairihar/funthreads/blob/master/examples/work_with_file_system/index.js):
```javascript
const Thread = require('funthreads');

const customData = {
  fileName: 'test.txt',
};

Thread.run(async () => {
  const fs = require('fs');
  const fsPromises = fs.promises;

  const { fileName } = global.threadData;

  await fsPromises.writeFile(fileName, '');

  return true;
}, customData)
  .then((res) => {
    console.log(`Success: ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
```

```shell
$ node  index.js
```
