import React, {
  Component
} from 'react'

import './inputBox.css'

class InputBox extends Component{
  render(){
    const {
      onAdd
    } = this.props

    return (
      <form className="search-wrapper"
        onSubmit={onAdd}
      >
        {/* use box-shadow to fix transition lag */}
        <button className="search-button"
          type='submit'
        >
          <svg className="enter-icon absolute-center" viewBox="0 0 24 24">
            <use xlinkHref="#enter-icon"></use>
          </svg>
        </button>
        <div className="input-box">
          <input
            type="text"
            autoComplete="off"
            placeholder="What needs to be done?"
            className="input-text Roboto-thin"
            name='title'
            />
        </div>
      </form>
    )
  }
}

  export default InputBox
