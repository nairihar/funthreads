function generateCallbackStr(cb) {
  const cbStr = `
    (async () => {
      const { parentPort } = require('worker_threads');
      try {              
        const cb = ${cb};
        const res = cb();
        const data = (res instanceof Promise) ? await res : res;
        parentPort.postMessage({ data });
      } catch(err) {
        parentPort.postMessage({ errMessage: err.toString() });
      }
    })();
  `;
  return cbStr;
}

module.exports = {
  generateCallbackStr,
};
