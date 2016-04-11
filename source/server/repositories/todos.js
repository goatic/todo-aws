function add(name){
    return {
        _id: '1234567890',
        name,
        createdAt: Date.now(),
        createdBy: 'goatic',
        tasks: []
    }
}

function get(_id){
    return {
        _id,
        name: 'test',
        createdAt: Date.now(),
        createdBy: 'goatic',
        tasks: []
    }
}

function getAll(){
    return [{
        _id: '1234567890',
        name: 'test',
        createdAt: Date.now(),
        createdBy: 'goatic',
        tasks: []
    },
    {
        _id: '1234567899',
        name: 'testo',
        createdAt: Date.now(),
        createdBy: 'goatic',
        tasks: []
    }]
}

export {
    add,
    get,
    getAll
}
