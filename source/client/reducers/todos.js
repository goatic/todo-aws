const GET_ALL = 'GET_ALL'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const REMOVE_TODOS = 'REMOVE_TODOS'
const SET_ISDONE_TODO = 'SET_ISDONE_TODO'

function reducer (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state]

    case GET_ALL:
    case REMOVE_TODOS:
      return [...action.todos]

    case REMOVE_TODO:
      return state.filter((todo) => todo._id !== action._id)

    case SET_ISDONE_TODO:
      return state.map((todo) => (
        todo._id === action.todo._id
        ? action.todo
        : todo
      ))

    default:
      return state
  }
}

export default reducer

export {
  ADD_TODO,
  GET_ALL,
  REMOVE_TODO,
  SET_ISDONE_TODO,
  REMOVE_TODOS
}
