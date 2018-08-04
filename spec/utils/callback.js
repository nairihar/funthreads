const assert = require('assert');

const { generateCallbackStr } = require('../../src/utils/callback');

describe('Utils Callback', () => {
    const myFunction = () => console.log(2 ** 10);
    const myFunctionStr = myFunction.toString();
    it('should generate string which includes myFunctionStr', () => {
        const str = generateCallbackStr(myFunction);
        assert.notEqual(str.indexOf(myFunctionStr), -1);
    })
});