import {
  connect
} from 'react-redux'

import Component from '../components/listBox.jsx'

function mapStateToProps ({todos, visibility}) {
  return {todos, visibility}
}

const Container = connect(
  mapStateToProps,
  null
)(Component)

export default Container
