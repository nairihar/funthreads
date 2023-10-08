const generateWorkerCode = (func) => `
  (async () => {
    const { parentPort, workerData } = require('worker_threads');

    function loadModules(moduleNames) {
      const modules = {};
      moduleNames?.forEach(moduleName => {
        modules[moduleName] = require(moduleName);
      });
      return modules;
    }

    try {
      const task = ${func};
      const res = workerData.workerModules
        ? task(loadModules(workerData.workerModules), ...workerData.workerParams)
        : task(...workerData.workerParams);
      const data = (res instanceof Promise) ? await res : res;
      parentPort.postMessage({ data });
    } catch(err) {
      parentPort.postMessage({ errMessage: err.toString() });
    }
  })();
`;

exports.createWorker = (task, params, modules) => ({
  workerCode: generateWorkerCode(task.toString()),
  workerParams: params,
  workerModules: modules,
});
