const { executeInThread } = require('funthreads');

// this will be executed in a dedicated thread
const task = (a, b, c) => {
  console.log('a', a, typeof a);
  console.log('b', b, typeof b);
  console.log('c', c, typeof c);
};

async function start() {
  try {
    await executeInThread(task, 1, {}, true);
  } catch (err) {
    console.log(err);
  }
}

start();
