const { workerData } = require('worker_threads');

const { cbStr } = workerData;

eval(cbStr);
