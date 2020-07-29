import Worker from 'worker-loader!./Worker';

const worker = new Worker();

worker.postMessage({ type: 'SET_ID', id: 2 });

worker.postMessage({ type: 'GET_ID' });

worker.addEventListener('message', (event) => {
    console.log(event.data);
});