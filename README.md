[![Build Status](https://travis-ci.org/nairihar/funthreads.svg?branch=master)](https://travis-ci.org/nairihar/funthreads)
[![Test Coverage](https://api.codeclimate.com/v1/badges/94861d745710a9a493d7/test_coverage)](https://codeclimate.com/github/nairihar/funthreads/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/nairihar/funthreads/badge.svg)](https://snyk.io/test/github/nairihar/funthreads)
[![Maintainability](https://api.codeclimate.com/v1/badges/94861d745710a9a493d7/maintainability)](https://codeclimate.com/github/nairihar/funthreads/maintainability)
[![npm version](https://badge.fury.io/js/funthreads.svg)](https://www.npmjs.com/package/funthreads)

# funthreads
A simple library that provides an abstraction for the Node.js worker_threads module. 🔥

You can run your function in a dedicated thread by working with Promises. This library presents a simple tool that takes a task function as its parameter, orchestrates its execution in a new thread, and subsequently delivers a Promise. Within the confines of this task function, you retain the freedom to furnish either a Promise or an unprocessed value (ranging from objects to strings, and more).

Furthermore, this library seamlessly integrates with Async/Await and TypeScript for an elevated development experience.

## Installation

```shell
$ npm i funthreads
```

## Example

This example demonstrates the optimization of two resource-intensive calculations through parallel execution in distinct threads.
By distributing the tasks across separate threads, significant time savings are achieved.

```javascript
import { runOnThread } from 'funthreads';

async function calculate() {
    const values = await Promise.all([
        runOnThread(() => 2 ** 10)),
        
        runOnThread(() => 3 ** 10))
    ]);
    
    console.log(values);
}

calculate();
```

**Surprisingly simple, isn't it?**

A comprehensive example can be found here: [_basic/index.js_](https://github.com/nairihar/funthreads/blob/master/examples/basic/index.js):


## All examples:
- [Basic example](https://github.com/nairihar/funthreads/tree/master/examples/basic)
- [Execute the task on a thread with pre-defined initial data](https://github.com/nairihar/funthreads/blob/master/examples/run_thread_with_custom_data/index.js)
- [Async thread](https://github.com/nairihar/funthreads/blob/master/examples/async_thread/index.js)
- [Error handling](https://github.com/nairihar/funthreads/blob/master/examples/error_handling/index.js)
- [Work with FileSystem](https://github.com/nairihar/funthreads/blob/master/examples/work_with_file_system/index.js)

## API

### `runOnThread(task, ...params)`
Execute a function in a thread.

#### Parameters
*Task (Function)*: The function to be executed in a thread.
*...params (any)*: Additional arguments to be passed to the Task function.

The `runOnThread` function allows you to execute a given task function in a dedicated thread, similar to the behavior of `setTimeout` or `setInterval`. You provide the main function to be executed, along with any additional arguments (...args) that should be passed to the given function.

#### Returns
*Promise<any>*: A Promise that resolves with the return value of the callback.

Inside the provided function, you have the flexibility to return any value, including a Promise. The returned value, whether it's a standard value or a Promise, will be passed back to you as the resolved result of the `Promise` returned by the `runOnThread` function.

#### Important

Access to data outside of the task function is restricted. If you require the use of a module, it should be required within the task function. The sole method for accessing data within a task function from external sources is through the utilization of the parameters. Closures do not function in this context.

#### Example

In this example, we're reading a file in a separate thread and returning the data in string format. We start by defining a task function that will run within the thread, and then we prepare the necessary parameters to be passed as inputs to that function.

```javascript
import { runOnThread } from 'funthreads';


async function task({ name }) {
    // closure doesn't work here

    const fs = require('fs/promises');
    const buffer = await fsPromises.readFile(fileName);
    
    return buffer.toString();
}

const params = {
  name: 'test.txt',
};

async function read() {
    const content = await runOnThread(task, params);
    
    console.log(content);
}

read();
```
