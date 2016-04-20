import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'

import {
    getAll as todos
} from './todos/queries'

import {
    add as addTodo,
    remove as removeTodo,
    toggleDone as toggleTodoDone,
    removeMore as removeTodos
} from './todos/mutations'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            todos
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addTodo,
            removeTodo,
            toggleTodoDone,
            removeTodos
        }
    })
})

export default schema
