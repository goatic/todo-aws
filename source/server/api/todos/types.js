import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLString,
    GraphQLList
} from 'graphql'

const task = new GraphQLObjectType({
    name: 'Task',
    fields: {
        name:       { type: GraphQLString },
        done:       { type: GraphQLBoolean },
        createdAt:  { type: GraphQLFloat },
        doneAt:     { type: GraphQLFloat }
    }
})

const todo = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        _id:        { type: GraphQLString },
        createdAt:  { type: GraphQLFloat },
        createdBy:  { type: GraphQLString },
        name:       { type: GraphQLString },
        tasks:      { type: new GraphQLList(task) }
    }
})

export {
    task,
    todo
}
export default todo
