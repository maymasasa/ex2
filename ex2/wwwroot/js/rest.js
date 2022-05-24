async function getAll() {
    const r = await fetch('/api/cotacts2');
    const d = await r.json();
    console.log(d);

}

async function get() {
    const r = await fetch('/api/cotacts2/avi');
    const d = await r.json();
    console.log(d);

}

async function post() {
    const r = await fetch('api/contacts2', {
        method: 'POST'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JASON.string({ Id:'sharon', Name: 'sharon', Server: '3', Last: 'hi', LastDated: '1' })

    });
    console.log(r);
}

async function put() {
    const r = await fetch('api/contacts2', {
        method: 'PUT'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JASON.string({ Id: 'sharon', Name: 'sharon', Server: '3', Last: 'hi', LastDated: '1' })

    });
    console.log(r);
}
async function put() {
    const r = await fetch('api/contacts2'/'sharon', {
        method: 'DELETE'
    });
    console.log(r);
}





