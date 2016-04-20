import fetch from 'isomorphic-fetch'

import {
  ADD_TODO,
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
  toggleDone,
  remove,
  removeVisible
}
