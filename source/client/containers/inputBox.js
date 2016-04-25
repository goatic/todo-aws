import {
  connect
} from 'react-redux'

import Component from '../components/inputBox.jsx'

import {
  add
} from '../actions/todos'

function mapDispatchToProps (dispatch) {
  return {
    onAdd: (e) => {
      e.preventDefault()

      const {
        title
      } = e.target

      if (!title.value.trim().length) {
        return
      }

      dispatch(add(title.value))

      title.value = ''
    }
  }
}

const Container = connect(
  null,
  mapDispatchToProps
)(Component)

export default Container
