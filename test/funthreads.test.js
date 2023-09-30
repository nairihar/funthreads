const test = require('node:test');
const assert = require('node:assert');

const { executeInThread, ThreadModules } = require('../src/funthreads');

test('Calculate basic multiplication', async () => {
  const param1 = 100;
  const param2 = 14;
  const num = await executeInThread((p1, p2) => p1 ** p2, param1, param2);
  assert.equal(num, 100e26);
});

test('Result should be an array with provided params', async () => {
  const params = [ 1, {}, true ];

  const values = await executeInThread((a, b, c) => ([
    a, b, c,
  ]), ...params);

  assert.deepEqual(values, params);
});

test('Should get access to modules', async () => {
  const modules = new ThreadModules('fs', 'assert');
  const param1 = 100;
  const param2 = 14;

  const num = await executeInThread((p1, p2, modules) => {
    if (modules['assert'] && modules['fs']) {
      return p1 ** p2;
    }
    return null;
  }, modules, param1, param2);
  assert.equal(num, 100e26);
});
