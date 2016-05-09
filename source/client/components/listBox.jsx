import React, {
  Component
} from 'react'

import './listBox.css'

import ListItem from '../containers/listItem'
import ListLabel from './listLabel.jsx'

class ListBox extends Component {
  render () {
    const {
      todos,
      visibility
    } = this.props

    const visibleTodos = todos.filter((todo) => {
      switch (visibility) {
        case 'SHOW_TBD':
          return !todo.isDone
        case 'SHOW_DONE':
          return todo.isDone
        default:
          return todo
      }
    })

    return (
      <div className='list-container'
      >
        {
          visibleTodos.length
          ? visibleTodos.map((todo) => (
            <ListItem
              key={todo._id}
              todo={todo}
            />
          ))
          : <ListLabel />
        }
      </div>
    )
  }
}

export default ListBox
