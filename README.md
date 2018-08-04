[![Build Status](https://travis-ci.org/nairihar/function-threads.svg?branch=master)](https://travis-ci.org/nairihar/function-threads)
[![Coverage Status](https://coveralls.io/repos/github/nairihar/function-threads/badge.svg?branch=master)](https://coveralls.io/github/nairihar/function-threads?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/nairihar/shared/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nairihar/shared?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/58a6979fd059a021b05e/maintainability)](https://codeclimate.com/github/nairihar/function-threads/maintainability)
[![npm version](https://badge.fury.io/js/function-threads.svg)](https://www.npmjs.com/package/function-threads)

# Function Threads
Additional layer for Node.js "worker_threads" module.

Library provides `run` function, which takes a callback as an argument, runs it in a thread and returns a promise. Inside callback you can return promise or plain value(i.e. object, string and etc...).

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

And always use `--experimental-worker` flag when you run project, because [worker-threads](https://nodejs.org/api/worker_threads.html) has been implemented under the hood which is in Experimental mode.
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

## All examples:
- [Basic](https://github.com/nairihar/function-threads/tree/master/examples/basic)
- [Run thread with custom data](https://github.com/nairihar/function-threads/blob/master/examples/run_thread_with_custom_data/index.js)
- [Async thread](https://github.com/nairihar/function-threads/blob/master/examples/async_thread/index.js)
- [Error handling](https://github.com/nairihar/function-threads/blob/master/examples/error_handling/index.js)
- [Work with FileSystem](https://github.com/nairihar/function-threads/blob/master/examples/work_with_file_system/index.js)

## API

### `Thread.run()`

#### Parameters
*(Function)*: Returns Promise, you can use `async/await` or just `then/catch` to get value.

*(object/array or primitive value)*: You can send custom data which will be used in a thread.
You can acces to this data using `global.threadData` in function.

#### Returns
*(Promise)*: Returns Promise, you can use `async/await` or just `then/catch` to get value.

#### Important
```
You can't access to any data outside of function, if you need to use a module, you should
require it in a callback. The only way to access data in a callback from outside is the useage
of second parameter. Closures will not work here.
```

#### Example
Work wit FileSystem [_index.js_](https://github.com/nairihar/function-threads/blob/master/examples/work_with_file_system/index.js):
```javascript
const Thread = require('function-threads');

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

And don't forgot to use Node >= v10.5.0 and `--experimental-worker` flag. 

```shell
$ node --experimental-worker  index.js
```
