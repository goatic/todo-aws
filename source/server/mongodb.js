import {
  MongoClient,
  ObjectID
} from 'mongodb'

import {
  MONGO_URL
} from '../../environment.config.js'

let context

async function getCollection (name) {
  if (!context) {
    context = await MongoClient.connect(MONGO_URL)
    return context.collection(name)
  }
}

export {
  getCollection,
  ObjectID as toObjectId
}
