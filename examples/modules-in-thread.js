import executeInThread from 'funthreads';

// this will be executed in a dedicated thread
async function task(fileName) {
    // Closure doesn't work here
    const { writeFile } = require('fs/promises');

    await writeFile(fileName, 'Hello from a thread!');
}

const fileName = 'thread.txt';

async function read() {
    const content = await executeInThread(task, fileName);
    
    console.log(content);
}

read();