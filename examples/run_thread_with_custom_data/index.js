const Thread = require('../../spec');

const customData = {
  name: 'Jhon'
};

Thread.run(() => {
  const { name } = global.threadData;
  return `Hello ${name}`;
}, customData)
.then(str => {
  console.log(`Result: ${str}`);
})
.catch(err => {
  console.error(err);
});
