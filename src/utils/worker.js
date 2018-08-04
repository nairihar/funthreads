const { generateCallbackStr } = require('./callback');

function generateWorkerData(cb, threadData) {
    const cbStr = generateCallbackStr(cb);
    const workerData = {
        cbStr,
        threadData
    };

    return workerData;
}

module.exports = {
    generateWorkerData
};
