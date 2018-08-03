# Node.js Threads
Additional layer for Node.js worker_threads

Thread's run function takes an callback as argument, and runs it in a thread. It returns a promise, inside callback you can return promise all plain value(i.e. object, string and etc...).

### Example
```javascript
const Thread = require('./Thread');

Thread.run(() => {            
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello');
    }, 3000);
  })
})
.then(res => {
  console.log(`Success: ${res}`);
})
.catch(err => {
  console.log(err);
});
```
