const Thread = require('../spec');

Thread.run(() => 2 ** 10)
  .then((num) => {
    console.log(`Result: ${num}`);
  })
  .catch((err) => {
    console.error(err);
  });
