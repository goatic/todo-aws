import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import todos from './reducers/todos'
import visibility from './reducers/visibility'

const store = createStore(
  combineReducers({
    todos,
    visibility
  }),
  applyMiddleware(
    thunk
  )
)

export default store
