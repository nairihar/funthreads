import executeInThread from 'funthreads';

// this will be executed in a dedicated thread
const task = () => {
    return Promise.reject('Something wrong!');
};

async function start() {
    try {
        await executeInThread(task);
    } catch(err) {
        console.log(err);
    }
}

start();
