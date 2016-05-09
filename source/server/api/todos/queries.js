import {
  GraphQLList
} from 'graphql'
import todo from './types'
import {
  getAll as dbGetAll
} from '../../repositories/todos'

const getAll = {
  type: new GraphQLList(todo),
  resolve: (parent, args) => dbGetAll()
}

export {
  getAll
}
