const Thread = require('../spec');

Thread.run(() => {            
  return 2 ** 10;
})
.then(num => {
  console.log(`Result: ${num}`);
})
.catch(err => {
  console.error(err);
});