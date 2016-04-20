import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList
} from 'graphql'
import todo from './types'
import {
    add as dbAdd,
    remove as dbRemove,
    toggleDone as dbToggleDone,
    removeMore as dbRemoveMore
} from '../../repositories/todos'

const add = {
    type: todo,
    args: {
        name:  { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) => dbAdd(args.name)
}

const remove = {
  type: GraphQLString,
  args: {
      _id: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (parent, args) => dbRemove(args._id)
}

const toggleDone = {
    type: todo,
    args: {
        _id: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: (parent, args) => dbToggleDone(args._id)
}

const removeMore = {
    type: new GraphQLList(todo),
    args: {
        ids: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))}
    },
    resolve: (parent, args) => dbRemoveMore(args.ids)
}

export {
    add,
    remove,
    toggleDone,
    removeMore
}
