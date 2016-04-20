import fetch from 'isomorphic-fetch'

import {
  ADD_TODO,
  GET_ALL,
  TOGGLE_DONE_TODO,
  REMOVE_TODO,
  REMOVE_VISIBLE
} from '../reducers/todos'

function add(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function getAll() {
  return async function (dispatch) {
    try {

      const response = await fetch(`${window.location.origin}/api`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({query: `query {todos{_id,name,isDone,createdAt,doneAt}}`})
      })

      if(!response.ok) {
        throw Error('network error! response not ok')
      }

      const result = await response.json()

      if(result.errors) {
        throw Error('there was API errors')
      }

      dispatch({
        type: GET_ALL,
        todos: result.data.todos
      })

    } catch (error) {
      console.log(error)
    }
  }
}

function toggleDone(_id) {
  return {
    type: TOGGLE_DONE_TODO,
    _id
  }
}

function remove(_id) {
  return {
    type: REMOVE_TODO,
    _id
  }
}

function removeVisible(filter) {
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
