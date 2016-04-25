import {
  ADD_TODO,
  GET_ALL,
  TOGGLE_DONE_TODO,
  REMOVE_TODO,
  REMOVE_VISIBLE
} from '../reducers/todos'

import {queryApi} from '../utilities'

function add(title) {
  return queryApi(
    `mutation {
        addTodo(
          title: "${title}"
        ){
          _id,
          title,
          done,
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

function getAll() {
  return queryApi(
    `query {
        todos{
          _id,
          title,
          done,
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

function toggleDone(_id) {
  return queryApi(
    `mutation {
        toggleTodoDone(
          _id: "${_id}"
        ){
          _id,
          title,
          done,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
        type: error ? 'Not Implemented Yet' : TOGGLE_DONE_TODO,
        todo: error ? undefined : data.toggleTodoDone,
        error: error ? error : undefined
    })
  )
}

function remove(_id) {
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

function removeVisible(filter) {
  return queryApi(
    `mutation {
        removeTodos(
          _id: "${_id}"
        ){
          _id,
          title,
          done,
          createdAt,
          doneAt
        }
      }`,
    (error, data, dispatch) => dispatch({
        type: error ? 'Not Implemented Yet' : REMOVE_VISIBLE,
        _id: error ? undefined : data.removeTodos,
        error: error ? error : undefined
    })
  )
  return {
    type: REMOVE_VISIBLE,
    filter
  }
}

export {
  add,
  getAll,
  toggleDone,
  remove,
  removeVisible
}
