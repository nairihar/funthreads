const Thread = require('../../spec');

Thread.run(() => 1 + a)
  .then((str) => {
    console.log(`Result: ${str}`);
  })
  .catch((err) => {
    console.error(err);
  });
