import React, {
  Component
} from 'react'

import './listControls.css'

class ListControls extends Component {

  constructor () {
    super()
    this.setSlider = this.setSlider.bind(this)
    this.unsetSlider = this.unsetSlider.bind(this)
  }

  setSlider (value) {
    this.refs.slider.style.marginLeft = `${value}%`
  }

  unsetSlider () {
    this.refs.slider.style.marginLeft =
      this.props.visibility === 'SHOW_ALL'
      ? '0%'
      : this.props.visibility === 'SHOW_TBD'
        ? '33%'
        : this.props.visibility === 'SHOW_DONE'
          ? '66%'
          : '99%'
  }

  render () {
    const {
      onToggleVisibility,
      onRemoveAll
    } = this.props

    const {
      setSlider,
      unsetSlider
    } = this

    return (
      <div
        className='category-container'
      >
        <section>
          <div className='category-left'>
            <ul className='Roboto-thin no-select'>
              <li
                id='one'
                className='one'
                onClick={() => onToggleVisibility('SHOW_ALL')}
                onMouseEnter={() => setSlider(0)}
                onMouseLeave={unsetSlider}
              >
                <a href='#'>All</a>
              </li>
              <li
                className='two'
                onClick={() => onToggleVisibility('SHOW_TBD')}
                onMouseEnter={() => setSlider(33)}
                onMouseLeave={unsetSlider}
              >
                <a href='#'>TBD</a>
              </li>
              <li
                className='three'
                onClick={() => onToggleVisibility('SHOW_DONE')}
                onMouseEnter={() => setSlider(66)}
                onMouseLeave={unsetSlider}
              >
                <a href='#'>Done</a>
              </li>
              <hr ref='slider' />
            </ul>
          </div>
          <div className='category-left'>
            <svg
              onClick={onRemoveAll}
              className='trash-all-icon'
              viewBox='0 0 24 24'
            >
              <use xlinkHref='#trash-all-icon'></use>
            </svg>
          </div>
        </section>
      </div>
    )
  }
}

export default ListControls
