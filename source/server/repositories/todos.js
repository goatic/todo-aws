import {
    getCollection,
    toObjectId
 } from '../mongodb'

const TODOS_COLLECTION = 'todos'

async function add(name){
    const todo = {
        name,
        createdAt: Date.now(),
        createdBy: 'goatic',
        tasks: []
    }
    await (await getCollection(TODOS_COLLECTION))
        .insertOne(todo)
    return todo
}

async function get(_id){
    return await (await getCollection(TODOS_COLLECTION))
        .find({_id: toObjectId(_id)})
        .limit(1)
        .next()
}

async function getAll(){
    return await (await getCollection(TODOS_COLLECTION))
        .find()
        .toArray()
}

async function addTask(_id, name){
    await (await getCollection(TODOS_COLLECTION))
        .updateOne({
            _id: toObjectId(_id)
        },
        {
            $push: {
                tasks: {
                    name,
                    createdAt: Date.now(),
                    done: false,
                    doneAt: null
                }
            }
        })
    return await get(_id)
}

export {
    add,
    get,
    getAll,
    addTask
}
