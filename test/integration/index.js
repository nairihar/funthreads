const assert = require('assert');

const Thread = require('../../');

describe('Integration basic test', () => {
  it('should return 100e14', async () => {
    const num = await Thread.run(() => 100 ** 14);
    assert.equal(num, 100e26);
  });
});
