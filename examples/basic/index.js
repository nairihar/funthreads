const Thread = require('function-threads');

Thread.run(() => 2 ** 10)
  .then((num) => {
    console.log(`Result: ${num}`);
  })
  .catch((err) => {
    console.error(err);
  });
