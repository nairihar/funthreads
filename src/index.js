const startWorker = require('./worker');
const { generateWorkerData } = require('./utils');

const Thread = {
  async run(cb, threadData) {
    const workerData = generateWorkerData(cb, threadData);
    const res = await startWorker(workerData);
    return res;
  },
};

module.exports = Thread;
