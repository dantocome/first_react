import React from 'react'
import "./container.css"

const Modal = () => {
  return (
    <div className='modal-overlay'>
        <div className="modal">
            <h2>Modal</h2>
            <input type="text" />
            <input type="text" />
            <button>Button</button>
        </div>
      
    </div>
  )
}

export default Modal
