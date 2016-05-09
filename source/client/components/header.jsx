import React, {
  Component
} from 'react'

import './header.css'

class Header extends Component {
  render () {
    return (
      <header
      >
        <div className='no-select'>
          <p className='title-text Roboto-thin'><b className='Roboto-bold'>Todo</b> List</p>
          <p className='version-text Roboto-thin'>v. 0.0.1</p>
        </div>
      </header>
    )
  }
}

export default Header
