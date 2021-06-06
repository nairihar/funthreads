import { genWorkerData } from './utils/worker';
import startWorker from './worker';

export const runOnThread = (cb: () => any, data: object | undefined = {}) => {
  const workerData = genWorkerData(cb, data);
  return startWorker(workerData);
};

export default runOnThread;
