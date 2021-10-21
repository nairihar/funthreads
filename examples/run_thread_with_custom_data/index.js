const { runOnThread } = require('function-threads');

const customData = {
  name: 'Jhon',
};

runOnThread(() => {
  const { name } = global.threadData;
  return `Hello ${name}`;
}, customData)
  .then((str) => {
    console.log(`Result: ${str}`);
  })
  .catch((err) => {
    console.error(err);
  });
