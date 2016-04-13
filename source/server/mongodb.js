import {
    MongoClient,
    ObjectID
 } from 'mongodb'

let context

async function getCollection(name){
    if (!context)
        context = await MongoClient.connect('mongodb://localhost:3001/todo-aws')
    return context.collection(name)
}

export {
    getCollection,
    ObjectID as toObjectId
}
