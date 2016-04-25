import {
  connect
} from 'react-redux'

import Component from '../components/listControls.jsx'

import {
  toggleVisibility
} from '../actions/visibility'

import {
  removeAll
} from '../actions/todos'

function mapStateToProps ({visibility}) {
  return {visibility}
}

function mapDispatchToProps (dispatch) {
  return {
    onToggleVisibility: (filter) => dispatch(toggleVisibility(filter)),
    onRemoveAll: () => dispatch(removeAll())
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
