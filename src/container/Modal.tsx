import React from 'react'
import "./container.css"

const Modal = () => {
  return (
    <div className='modal-overlay'>
        <div className="modal">
            <h4>Modal</h4>
            <input type="text" />
            <input type="text" />
            <button>Button</button>
        </div>
      
    </div>
  )
}

export default Modal
