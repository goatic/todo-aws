import { ADD_TODO, GET_ALL, SET_ISDONE_TODO, REMOVE_TODO, REMOVE_TODOS } from '../reducers/todos'

import { queryApi } from '../utilities'

function add (title) {
  return queryApi(
    `mutation {
        addTodo(
          title: "${title}"
        ){
          _id,
          title,
          isDone,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
      type: error ? 'Not Implemented Yet' : ADD_TODO,
      todo: error ? undefined : data.addTodo,
      error: error ? error : undefined
    })
  )
}

function getAll () {
  return queryApi(
    `query {
        todos{
          _id,
          title,
          isDone,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
      type: error ? 'Not Implemented Yet' : GET_ALL,
      todos: error ? undefined : data.todos,
      error: error ? error : undefined
    })
  )
}

function setIsDone (_id, isDone) {
  return queryApi(
    `mutation {
        setTodoIsDone(
          _id: "${_id}",
          isDone: ${isDone}
        ){
          _id,
          title,
          isDone,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
      type: error ? 'Not Implemented Yet' : SET_ISDONE_TODO,
      todo: error ? undefined : data.setTodoIsDone,
      error: error ? error : undefined
    })
  )
}

function remove (_id) {
  return queryApi(
    `mutation {
        removeTodo(
          _id: "${_id}"
        )
      }`,
    (error, data, dispatch) => dispatch({
      type: error ? 'Not Implemented Yet' : REMOVE_TODO,
      _id: error ? undefined : data.removeTodo,
      error: error ? error : undefined
    })
  )
}

function removeAll () {
  return queryApi(
    `mutation {
        removeTodos{
          _id,
          title,
          isDone,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
      type: error ? 'Not Implemented Yet' : REMOVE_TODOS,
      todos: error ? undefined : data.removeTodos,
      error: error ? error : undefined
    })
  )
}

export { add, getAll, setIsDone, remove, removeAll }
