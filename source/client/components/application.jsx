import React, {
  Component
} from 'react'

import '../styles.css'
import '../mobile.css'
import Header from './header.jsx'

import InputBox from '../containers/inputBox'
import ListBox from '../containers/listBox'
import ListControls from '../containers/listControls'
import Footer from './footer.jsx'

class Application extends Component{
  componentDidMount() {
    const {
      onGetAll
    } = this.props

    onGetAll()
  }

  render(){
    return (
      <div className="absolute-center main-box"
      >
        <svg style={{display: 'none'}}>
          <symbol id="enter-icon">
            <path d="M19,7v4H5.83l3.58-3.59L8,6l-6,6l6,6l1.41-1.41L5.83,13H21V7H19z" />
            <path fill="none" d="M0,0h24v24H0V0z" />
          </symbol>
          <symbol id="trash-icon">
            <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M19,4h-3.5l-1-1h-5l-1,1H5v2h14V4z" />
            <path fill="none" d="M0,0h24v24H0V0z" />
          </symbol>
          <symbol id="trash-all-icon">
            <path d="M15,16h4v2h-4V16z M15,8h7v2h-7V8z M15,12h6v2h-6V12z M3,18c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8H3V18z M14,5h-3l-1-1H6L5,5H2v2h12V5z" />
            <path fill="none" d="M0,0h24v24H0V0z" />
          </symbol>
          <symbol id="checkmark-icon">
            <path d="M9,16.17L4.83,12l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" />
            <path fill="none" d="M0,0h24v24H0V0z" />
          </symbol>
        </svg>

        <Header
        />
        <InputBox
        />
        <ListBox
        />
        <ListControls
        />
        <Footer
        />
      </div>
    )
  }
}

  export default Application
