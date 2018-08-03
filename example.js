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