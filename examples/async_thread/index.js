const Thread = require('../../spec');

Thread.run(async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('async');
        }, 3000);
    })
})
.then(str => {
  console.log(`Result: ${str}`);
})
.catch(err => {
  console.error(err);
});
