import React, {
  Component
} from 'react'

import moment from 'moment'

import './listItem.css'

class ListItem extends Component {
  render () {
    const {
      todo,
      onRemove,
      onSetIsDone
    } = this.props

    return (
      <div className='element'
      >
        <div
          onClick={() => onSetIsDone(todo._id, !todo.isDone)}
          className='list-left'
        >
          <div
            className={`list-circle inline-middle ${todo.isDone ? 'checked' : ''}`}
          >
            <svg
              className={`checkmark-icon absolute-center ${todo.isDone ? 'show' : ''}`}
              viewBox='0 0 24 24'
            >
              <use xlinkHref='#checkmark-icon'></use>
            </svg>
          </div>
          <div className='list-text inline-middle'>
            <p className='Roboto list-title no-select'>{todo.title}</p>
            <p className='Roboto-thin list-date no-select'>
              {todo.doneAt ? 'done' : 'added'}
              {moment(todo.doneAt ? todo.doneAt : todo.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div
          className='list-right'
          >
          <svg
            className='trash-icon'
            viewBox='0 0 24 24'
            onClick={() => onRemove(todo._id)}
          >
            <use xlinkHref='#trash-icon'></use>
          </svg>
        </div>
      </div>
    )
  }
}

export default ListItem
