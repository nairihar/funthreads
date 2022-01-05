/* eslint-disable no-alert, no-eval */

const { workerData } = require('worker_threads');

const { threadData, workerCode } = workerData;

global.threadData = threadData;

eval(workerCode);
