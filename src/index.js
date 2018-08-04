const startWorker = require('./worker');
const { generateWorkerData } = require('./utils');

class Thread {
  async run(cb, threadData) {
    const workerData = generateWorkerData(cb, threadData);
    const res = await startWorker(workerData);
    return res;
  }
}

module.exports = new Thread();