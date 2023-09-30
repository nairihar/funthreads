const path = require('path');
const { Worker } = require('worker_threads');

const workerPath = path.join(__dirname, 'worker.js');

module.exports = (workerData) => new Promise((resolve, reject) => {
  const worker = new Worker(workerPath, {
    workerData,
  });

  let finished = false;

  worker.once('message', ({ errMessage, data }) => {
    finished = true;

    if (errMessage) reject(new Error(`Thread ${errMessage}`));
    else resolve(data);
  });

  worker.once('error', reject);

  worker.once('exit', () => {
    if (!finished) {
      finished = true;
      resolve();
    }
  });
});
