import executeInThread from 'funthreads';

// this will be executed in a dedicated thread
const task = () => {
    // return is important!
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done!');
        }, 3000);
    });
};

async function start() {
    try {
        const data = await executeInThread(task);

        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

start();
