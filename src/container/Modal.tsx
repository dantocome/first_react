import { useState } from "react";
import React from 'react'
import "./container.css"
import { IoCloseCircleSharp } from "react-icons/io5";

const Modal = ({setIsModalOpen, modalRequestType}) => {

  const[description, setDescription] = useState("");
  const[amount, setAmount] = useState("");

  return (
    <div className='modal-overlay'>
        <div className="modal">
           <IoCloseCircleSharp size={20} color='black' className='modal-close-icon' 
           onClick={() => setIsModalOpen(false)}/>
            <h4>{modalRequestType==="expense" ? "Add Expense": "Add Income"}</h4>
            <input type="text" placeholder='description' value={description} 
            onChange={(e)=> setDescription(e.target.value)}/>
            <input type="text"  placeholder='Amount' value={amount}
             onChange={(e)=>setAmount(e.target.value)}/>
            <button>Button</button>
            
        </div>
      
    </div>
  )
}

export default Modal
