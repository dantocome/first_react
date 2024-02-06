import React, { useState } from 'react'
import "./container.css"
import { IoCloseCircleSharp } from "react-icons/io5";

const Modal = ({setIsModalOpen, modalRequestType, 
  onAddExpenseHandler, onAddIncomeHandler}) => {

  const[description, setDescription] = useState("");
  const[amount, setAmount] = useState("");

  const onButtonClick = ()=>{
    if(!description || !amount){
      return;
    }
    if(modalRequestType==="expense"){
      onAddExpenseHandler(description, amount);
    }
    if(modalRequestType==="income"){
      onAddIncomeHandler(description, amount);
    }
    setIsModalOpen(false);
  };

  return (
    <div className='modal-overlay'>
        <div className="modal">
           <IoCloseCircleSharp size={25} color='black' className='modal-close-icon' 
           onClick={() => setIsModalOpen(false)}/>
            <h4>{modalRequestType==="expense" ? "Add Expense": "Add Income"}</h4>
            <input type="text" placeholder='description' value={description} 
            onChange={(e)=> setDescription(e.target.value)}/>
            <input type="text"  placeholder='Amount' value={amount}
             onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={onButtonClick}>Button</button>
            
        </div>
      
    </div>
  )
}

export default Modal
