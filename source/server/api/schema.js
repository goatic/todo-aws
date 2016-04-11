import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'

import {
    get as todo,
    getAll as todos
} from './todos/queries'

import {
    add as addTodo
} from './todos/mutations'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            todo,
            todos
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addTodo
        }
    })
})

export default schema
