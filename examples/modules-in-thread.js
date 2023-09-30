const { executeInThread, ThreadModules } = require('funthreads');

// this will be executed in a dedicated thread
async function task(modules) {
  // Closure doesn't work here
  const { readFile } = modules['fs/promises'];

  const content = await readFile(__filename);

  return content.toString();
}

async function read() {
  const modules = new ThreadModules('fs/promises');
  const content = await executeInThread(task, modules);

  console.log(content);
}

read();
