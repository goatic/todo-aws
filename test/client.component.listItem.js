import {
  beforeEach,
  describe,
  it
} from 'mocha'

import {
  expect
} from 'chai'

import {
  spy
} from 'sinon'

import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils'

import React from 'react'

import ListItem from '../source/client/components/listItem.jsx'

describe('client/components/listItem.jsx', () => {
  let action

  const todo = {
    _id: '123abc',
    title: 'Take Out Trash',
    isDone: false,
    createdAt: 0,
    doneAt: 86400
  }
  const component = renderIntoDocument(
    <ListItem
      todo={todo}
      onRemove={() => {
        action('remove')
      }}
      onSetIsDone={() => {
        action('setIsDone')
      }}
    />
  )

  beforeEach(() => {
    action = spy()
  })

  it('should display the title of the todo', () => {
    expect(component.refs.title.innerHTML).to.equal(todo.title)
  })

  it('should call onRemove when clicking the remove button', () => {
    Simulate.click(component.refs.remove)

    expect(action.calledOnce).to.equal(true)
    expect(action.calledWith('remove')).to.equal(true)
  })

  it('should call onSetIsDone when clicking the setIsDone button', () => {
    Simulate.click(component.refs.setIsDone)

    expect(action.calledOnce).to.equal(true)
    expect(action.calledWith('setIsDone')).to.equal(true)
  })

})
