import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

const task = new GraphQLObjectType({
    name: 'Task',
    fields: {
        _id:        { type: GraphQLString },
        name:       { type: GraphQLString },
        done:       { type: GraphQLBoolean },
        createdAt:  { type: GraphQLInt },
        doneAt:     { type: GraphQLInt }
    }
})

const todo = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        _id:        { type: GraphQLString },
        createdAt:  { type: GraphQLInt },
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
