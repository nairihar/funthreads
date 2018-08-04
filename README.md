# Function Threads
Additional layer for Node.js "worker_threads" module.

Library provides "run" function, which takes an callback as argument, and runs it in a thread. It returns a promise, inside callback you can return promise or plain value(i.e. object, string and etc...).

### Example
```javascript
const Thread = require('./Thread');

Thread.run(() => {            
  return 2 ** 10;
})
.then(res => {
  console.log(`Success: ${res}`);
})
.catch(err => {
  console.error(err);
});
```
