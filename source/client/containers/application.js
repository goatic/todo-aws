import {
  connect
} from 'react-redux'

import Component from '../components/application.jsx'

import {
  getAll
} from '../actions/todos'

function mapDispatchToProps (dispatch) {
  return {
    onGetAll: () => dispatch(getAll())
  }
}

const Container = connect(
  null,
  mapDispatchToProps
)(Component)

export default Container
