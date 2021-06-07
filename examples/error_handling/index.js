const Thread = require('function-threads');

// eslint-disable-next-line
Thread.run(() => 1 + a)
  .then((str) => {
    console.log(`Result: ${str}`);
  })
  .catch((err) => {
    console.error(err);
  });
