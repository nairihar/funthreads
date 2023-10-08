const startWorker = require('./worker/executor');
const { createWorker } = require('./worker/skeleton');

function ThreadModules(...moduleNames) {
  this.names = [ ...moduleNames ];
}

exports.ThreadModules = ThreadModules;

exports.executeInThread = (task, threadModules, ...args) => {
  let params;
  let modules;

  const moduleArg = args.find((arg) => arg instanceof ThreadModules);

  if (moduleArg) {
    throw new Error('ThreadModules type of object should be provided only through the second argument!');
  }

  if (threadModules instanceof ThreadModules) {
    modules = threadModules.names;
    params = [ ...args ];
  } else {
    params = [ threadModules, ...args ];
  }

  const workerSchema = createWorker(task, params, modules);
  return startWorker(workerSchema);
};
