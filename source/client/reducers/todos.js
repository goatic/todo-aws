const GET_ALL = 'GET_ALL'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const REMOVE_VISIBLE ='REMOVE_VISIBLE'
const TOGGLE_DONE_TODO = 'TOGGLE_DONE_TODO'

function reducer (state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [action.todo, ...state]

    case GET_ALL:
      return [...action.todos]

    case REMOVE_TODO:
      return state.filter((todo) => todo._id !== action._id)

    case TOGGLE_DONE_TODO:
      return state.map((todo) => (
        todo._id === action._id
        ? Object.assign({}, todo, {done: !todo.done, doneAt: todo.done ? undefined : Date.now()})
        : todo
      ))

    case REMOVE_VISIBLE:
      //temporary - this nested reducer is coupled to visibility and todos
      switch(action.filter) {
        case 'SHOW_ALL':
          return []

        case 'SHOW_DONE':
          return state.filter((todo) => !todo.done)

        case 'SHOW_TBD':
          return state.filter((todo) => todo.done)

        default:
          return state
      }

    default:
      return state
  }
}

export default reducer

export {
  ADD_TODO,
  GET_ALL,
  REMOVE_TODO,
  TOGGLE_DONE_TODO,
  REMOVE_VISIBLE
}
