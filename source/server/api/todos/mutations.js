import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList
} from 'graphql'
import todo from './types'
import {
    add as dbAdd,
    remove as dbRemove,
    setIsDone as dbSetIsDone,
    removeAll as dbRemoveAll
} from '../../repositories/todos'

const add = {
    type: todo,
    args: {
        title:  { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) => dbAdd(args.title)
}

const remove = {
  type: GraphQLString,
  args: {
      _id: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (parent, args) => dbRemove(args._id)
}

const setIsDone = {
    type: todo,
    args: {
        _id: {type: new GraphQLNonNull(GraphQLString)},
        isDone: {type: new GraphQLNonNull(GraphQLBoolean)}
    },
    resolve: (parent, args) => dbSetIsDone(args._id, args.isDone)
}

const removeAll = {
    type: new GraphQLList(todo),
    resolve: (parent, args) => dbRemoveAll()
}

export {
    add,
    remove,
    setIsDone,
    removeAll
}
