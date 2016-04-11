import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import todo from './types'
import {
    getAll as dbGetAll,
    get as dbGet
} from '../../repositories/todos'

const getAll = {
    type: new GraphQLList(todo),
    resolve: (parent, args) => dbGetAll()
}

const get = {
    type: todo,
    args: {
        _id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) => dbGet(args._id)
}

export {
    getAll,
    get
}
