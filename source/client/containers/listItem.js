import {
  connect
} from 'react-redux'

import Component from '../components/listItem.jsx'

import {
  remove,
  setIsDone
} from '../actions/todos'

function mapDispatchToProps (dispatch) {
  return {
    onRemove: (_id) => dispatch(remove(_id)),
    onSetIsDone: (_id, isDone) => dispatch(setIsDone(_id, isDone))
  }
}

const Container = connect(
  null,
  mapDispatchToProps
)(Component)

export default Container
