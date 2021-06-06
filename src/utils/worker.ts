export const geneWorkerCode = (cb:string) : string => `
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
  `;

type WorkerOptions = {
  workerCode: string,
  threadData: object,
};

export const genWorkerData = (cb:()=>any, data:object): WorkerOptions => ({
  workerCode: geneWorkerCode(cb.toString()),
  threadData: data,
});
