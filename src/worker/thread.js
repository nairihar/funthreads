const { workerData } = require('worker_threads');

const { threadData, cbStr } = workerData;

global.threadData = threadData;

eval(cbStr);
