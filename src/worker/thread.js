const { workerData } = require('worker_threads');

const { workerCode } = workerData;

eval(workerCode);
