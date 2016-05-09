const SHOW_ALL = 'SHOW_ALL'
const SHOW_TBD = 'SHOW_TBD'
const SHOW_DONE = 'SHOW_DONE'

function reducer (state = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ALL:
    case SHOW_TBD:
    case SHOW_DONE:
      return action.type

    default:
      return state
  }
}

export default reducer

export {
  SHOW_ALL,
  SHOW_TBD,
  SHOW_DONE
}
