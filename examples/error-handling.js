const { executeInThread } = require('funthreads');

// this will be executed in a dedicated thread
const task = () => Promise.reject(new Error('Something wrong!'));

async function start() {
  try {
    await executeInThread(task);
  } catch (err) {
    console.log(err);
  }
}

start();
