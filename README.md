![](https://img.shields.io/badge/dependencies-none-brightgreen.svg)
![](https://img.shields.io/npm/dt/funthreads.svg)
![](https://img.shields.io/npm/l/funthreads.svg)

# funthreads
A simple library that provides an abstraction for the Node.js `worker_threads` module.
It enables you to run your function in a separate thread. You receive a Promise that resolves with the result of your function.

### Example
```js
const { executeInThread } = require('funthreads');

// heavy operation (this will not block the main thread)
const num = await executeInThread((limit) => {
  let result = 0, i = 1;

  while (i <= limit) {
    result += i.toString().split('').reverse().join('').length;
    i++;
  }

  return result;
}, 12345678);
```

This example highlights the optimization of a resource-intensive calculation. By executing the function in a separate thread, we prevent the main thread from being blocked.

**Surprisingly simple, isn't it?**

## Installation

```shell
$ npm i funthreads
```

## All examples:
- [Basic example](https://github.com/nairihar/funthreads/tree/master/examples/basic.js)
- [Parameters for the thread task](https://github.com/nairihar/funthreads/blob/master/examples/multi-params.js)
- [Async function inside the thread](https://github.com/nairihar/funthreads/blob/master/examples/async-task.js)
- [Error handling](https://github.com/nairihar/funthreads/blob/master/examples/error-handling.js)
- [Use modules inside the thread](https://github.com/nairihar/funthreads/blob/master/examples/modules-in-thread.js)

## Contributing

See the [contributing guide](https://github.com/nairihar/funthreads/blob/master/CONTRIBUTING.md) for detailed instructions on how to get started with our project.

## API

### `executeInThread(task, ...params)`
Runs the specified function in a separate thread.

#### Parameters
- `Task (Function)`: The function to be executed in a thread.
    - This can also be a async function (promise).
- `...params (Any)`: Additional arguments to be passed to the Task function.
    - Parameter cann't be a function.

```js
const task = function() { ... };
executeInThread(task, 'John', true, {}, ...);
```

The `executeInThread` function allows you to execute a given task function in a dedicated thread, similar to the behavior of `setTimeout` or `setInterval`. You provide the main function to be executed, along with any additional arguments (...args) that should be passed to the given function.

#### Returns
`Promise<any>`: A Promise that resolves with the return value of the callback.

Inside the provided function, you have the flexibility to return any value, including a Promise. The returned value, whether it's a standard value or a Promise, will be passed back to you as the resolved result of the `Promise` returned by the `executeInThread` function.

```js
const number = await executeInThread(() => 123); // 123
const name = await executeInThread(() => Promise.resolve('John')); // John
```

#### Important (limitation)

Access to data outside of the task function is restricted. If you require the use of a module, it should be required within the task function. The sole method for accessing data within a task function from external sources is through the utilization of the parameters. Closures do not function in this context.

In this example, we're reading a file in a separate thread and returning the data in string format. We start by defining a task function that will run within the thread, and then we prepare the necessary parameters to be passed as inputs to that function.

```javascript
const { executeInThread } = require('funthreads');

async function task(fileName) {
// Closure doesn't work here
  const { readFile } = require('fs/promises');
  const content = await readFile(__filename);
  return content.toString();
}

async function read() {
  const content = await executeInThread(task, fileName);
  console.log(content);
}

read();
```

There is also another option if you don't want to use `require` inside the function.

```js
const { executeInThread, ThreadModules } = require('funthreads');

async function task(modules) {
  // Closure doesn't work here
  const { readFile } = modules['fs/promises'];
  const content = await readFile(__filename);
  return content.toString();
}

async function read() {
  const requiredModules = new ThreadModules('fs/promises', 'test', 'path', ...);
  const content = await executeInThread(task, requiredModules);
  console.log(content);
}

read();
```

The `ThreadModules` class lets you set up modules for the thread. You can provide it only thorough the second argument, and you'll have access to the libraries through the `modules` object.

You should only provide the `ThreadModules` type of object once through the second parameter. Attempting to provide it multiple times will result in an error. Additionally, avoid returning the `modules` object from the task function, as it will also lead to errors.
