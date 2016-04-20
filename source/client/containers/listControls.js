import {
  connect
} from 'react-redux'

import Component from '../components/listControls.jsx'

import {
  toggleVisibility
} from '../actions/visibility'

import {
  removeVisible
} from '../actions/todos'

function mapStateToProps ({visibility}) {
  return {visibility}
}

function mapDispatchToProps (dispatch) {
  return {
    onToggleVisibility: (filter) => dispatch(toggleVisibility(filter)),
    onRemoveVisible: (filter) => dispatch(removeVisible(filter))
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
