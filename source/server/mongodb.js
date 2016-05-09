import {
  MongoClient,
  ObjectID
} from 'mongodb'

let context

async function getCollection(name){
  if (!context)
  context = await MongoClient.connect(process.env.MONGO_URL || 'mongodb://localhost:3002/todo-aws')
  return context.collection(name)
}

export {
  getCollection,
  ObjectID as toObjectId
}
