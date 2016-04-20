import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLString
} from 'graphql'

const todo = new GraphQLObjectType({
    name: 'Todo',
    description: 'A Task that needs to be done',
    fields: {
        _id: {
            type: GraphQLString,
            description: 'The ID of the todo'
        },
        name:       {
            type: GraphQLString,
            description: 'The name of the task'
        },
        isDone:     {
            type: GraphQLBoolean,
            description: 'Whether the task is done'
        },
        createdAt:  {
            type: GraphQLFloat,
            description: 'When the task was created'
        },
        doneAt:     {
            type: GraphQLFloat,
            description: 'When the task was done'
        }
    }
})

export default todo
