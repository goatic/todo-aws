import React, {
  Component
} from 'react'

import './listLabel.css'

class ListLabel extends Component{
  render(){
    return (
      <div className="empty-container"
      > <p className="Roboto inline-middle no-select">No Items To Display!</p>
      </div>
    )
  }
}

  export default ListLabel
