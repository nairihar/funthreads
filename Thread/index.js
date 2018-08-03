const path = require('path');
const { Worker } = require('worker_threads');

const workerPath = path.join(__dirname, 'worker.js');

function startWorker(cb) {
	return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData: {
        cbStr: `
          (async () => {
            const { parentPort } = require('worker_threads');
            try {              
              const cb = ${cb};
              const res = cb();
              const data = (res instanceof Promise) ? await res : res;
              parentPort.postMessage({ data });
            } catch(err) {
              parentPort.postMessage({ errMessage: err.toString() });
            }
          })();
        `
      }
    });

    worker.once('message', ({ errMessage, data }) => {
      if (errMessage) return reject(new Error(errMessage));
      resolve(data)
    });
    worker.once('error', reject);
  });
}

class Thread {
  async run(cb) {
    const res = await startWorker(cb);
    return res;
  }
}

module.exports = new Thread();