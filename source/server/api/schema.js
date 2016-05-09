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
  setIsDone as setTodoIsDone,
  removeAll as removeTodos
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
      setTodoIsDone,
      removeTodos
    }
  })
})

export default schema
