import assert from 'assert';

import { genWorkerData } from '../../src/utils/worker';

describe('Utils Callback', () => {
  const myFunction = () => console.log(2 ** 10);
  const myFunctionStr = myFunction.toString();
  it('should generate string which includes myFunctionStr', () => {
    const { workerCode } = genWorkerData(myFunction, {});
    assert.notEqual(workerCode.indexOf(myFunctionStr), -1);
  });
});
