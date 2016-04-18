import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'

import {
    get as todo,
    getAll as todos
} from './todos/queries'

import {
    add as addTodo,
    addTask,
    remove as removeTodo,
    removeTask
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
            addTodo,
            addTask,
            removeTodo,
            removeTask
        }
    })
})

export default schema
