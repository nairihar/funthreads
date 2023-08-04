export const geneWorkerCode = (func: string) : string => `
    (async () => {
      const { parentPort, workerData } = require('worker_threads');
      try {
        const task = ${func};
        const res = task(...workerData.workerParams);
        const data = (res instanceof Promise) ? await res : res;
        parentPort.postMessage({ data });
      } catch(err) {
        parentPort.postMessage({ errMessage: err.toString() });
      }
    })();
  `;

type WorkerOptions = {
  workerCode: string,
  workerParams: any[],
};

export const createWorkerMetadata = (task: ()=> any, params: any[]): WorkerOptions => ({
  workerCode: geneWorkerCode(task.toString()),
  workerParams: params,
});
