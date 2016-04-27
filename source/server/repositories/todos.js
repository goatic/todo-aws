import {
    getCollection,
    toObjectId
 } from '../mongodb'

const TODOS_COLLECTION = 'todos'

async function add(title){
    const todo = {
        title,
        createdAt: Date.now(),
        isDone: false,
        doneAt: undefined,
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

async function remove(_id){
  await (await getCollection(TODOS_COLLECTION))
        .deleteOne({_id: toObjectId(_id)})
  return _id
}

async function setIsDone(_id, isDone){
      await (await getCollection(TODOS_COLLECTION))
        .updateOne({_id: toObjectId(_id)}, {
            $set: {
                isDone: isDone,
                doneAt: isDone ? Date.now() : undefined
            }
        })
  return await get(_id)
}

async function removeAll(){
    await (await getCollection(TODOS_COLLECTION))
        .remove()
    return await getAll()
}

export {
    add,
    getAll,
    remove,
    setIsDone,
    removeAll
}
