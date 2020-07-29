const ctx: Worker = self as any;

let id: number = 0;

function getId(){
    ctx.postMessage({ id });
}

function setId(newId: number){
    id = newId
}

ctx.addEventListener('message', (event) => {
    switch (event.data.type) {
        case 'GET_ID':
            getId();
            break;
        case 'SET_ID':
            setId(event.data.id);
            break;
    }
});