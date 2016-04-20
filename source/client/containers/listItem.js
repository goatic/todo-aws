import {
  connect
} from 'react-redux'

import Component from '../components/listItem.jsx'

import {
  remove,
  toggleDone
} from '../actions/todos'

function mapDispatchToProps (dispatch) {
  return {
    onRemove: (_id) => dispatch(remove(_id)),
    onToggleDone: (_id) => dispatch(toggleDone(_id))
  }
}

const Container = connect(
  null,
  mapDispatchToProps
)(Component)

export default Container
