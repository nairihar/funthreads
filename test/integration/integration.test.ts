import assert from 'assert';

import executeInThread from '../../src';

describe('Integration basic test', () => {
  it('should return 100e14', async () => {
    const num = await executeInThread(() => 100 ** 14);
    assert.equal(num, 100e26);
  });
});
