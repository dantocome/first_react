import React from 'react'
import "./container.css"
import { IoCloseCircleSharp } from "react-icons/io5";

const Modal = ({setIsModalOpen}) => {
  return (
    <div className='modal-overlay'>
        <div className="modal">
           <IoCloseCircleSharp size={20} color='black' className='modal-close-icon' 
           onClick={() => setIsModalOpen(false)}/>
            <h4>Modal</h4>
            <input type="text" />
            <input type="text" />
            <button>Button</button>
            
        </div>
      
    </div>
  )
}

export default Modal
