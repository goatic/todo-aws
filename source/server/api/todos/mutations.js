import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import todo from './types'
import {
    add as dbAdd,
    addTask as dbAddTask,
    remove as dbRemove,
    removeTask as dbRemoveTask
} from '../../repositories/todos'

const add = {
    type: todo,
    args: {
        name:  { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) => dbAdd(args.name)
}

const addTask = {
    type: todo,
    args: {
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: (parent, args) => dbAddTask(args._id, args.name)
}

const remove = {
  type: GraphQLString,
  args: {
      _id: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (parent, args) => dbRemove(args._id)
}

const removeTask = {
    type: todo,
    args: {
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: (parent, args) => dbRemoveTask(args._id, args.name)
}

export {
    add,
    addTask,
    remove,
    removeTask
}
