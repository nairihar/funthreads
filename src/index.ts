import startWorker from './worker/worker';
import { createWorkerMetadata } from './worker/metadata';

const executeInThread = (task: () => any, ...params: any[]) => {
  const metadata = createWorkerMetadata(task, params);
  return startWorker(metadata);
};

export default executeInThread;
