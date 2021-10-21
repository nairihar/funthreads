const { runOnThread } = require('function-threads');

// eslint-disable-next-line
runOnThread(() => 1 + a)
  .then((str) => {
    console.log(`Result: ${str}`);
  })
  .catch((err) => {
    console.error(err);
  });
