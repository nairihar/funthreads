const Thread = require('function-threads');

const customData = {
  fileName: 'test.txt',
};

Thread.run(async () => {
  const fs = require('fs');
  const fsPromises = fs.promises;

  const { fileName } = global.threadData;

  await fsPromises.writeFile(fileName, '');

  return true;
}, customData)
  .then((res) => {
    console.log(`Success: ${res}`);
  })
  .catch((err) => {
    console.error(err);
  });
