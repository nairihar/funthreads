const startWorker = require('./worker/executor');
const { createWorker } = require('./worker/skeleton');

function ThreadModules(...moduleNames) {
  this.names = [ ...moduleNames ];
}

exports.ThreadModules = ThreadModules;

exports.executeInThread = (task, threadModules, ...args) => {
  let modules; let
    params;

  if (threadModules instanceof ThreadModules) {
    modules = threadModules.names;
    params = [ ...args ];
  } else {
    params = [ threadModules, ...args ];
  }

  const workerSchema = createWorker(task, params, modules);
  return startWorker(workerSchema);
};
