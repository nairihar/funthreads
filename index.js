const Thread = require('./Thread');

Thread.run(() => {            
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Date.now());
    }, 3000);
  })
})
.then(res => {
  console.log(`Success: ${res}`);
})
.catch(err => {
  console.log(err);
});