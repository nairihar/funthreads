const Thread = require('function-threads');

Thread.run(async () => {
  const fs = require('fs');
  const fsPromises = fs.promises;

  await fsPromises.writeFile('test.txt', '');

  return true;
})
  .then((res) => {
    console.log(`Success: ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
