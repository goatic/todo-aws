import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import todo from './types'
import {
    add as dbAdd
} from '../../repositories/todos'

const add = {
    type: todo,
    args: {
        name:  { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) => dbAdd(args.name)
}

export {
    add
}
