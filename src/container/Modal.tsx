import React from 'react'
import "./container.css"
import { IoCloseCircleSharp } from "react-icons/io5";

const Modal = ({setIsModalOpen, modalRequestType}) => {
  return (
    <div className='modal-overlay'>
        <div className="modal">
           <IoCloseCircleSharp size={20} color='black' className='modal-close-icon' 
           onClick={() => setIsModalOpen(false)}/>
            <h4>{modalRequestType==="expense" ? "Add Expense": "Add Income"}</h4>
            <input type="text" placeholder='description'/>
            <input type="text"  placeholder='Amount'/>
            <button>Button</button>
            
        </div>
      
    </div>
  )
}

export default Modal
