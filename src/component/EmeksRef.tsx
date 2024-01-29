import React, { useRef } from 'react';
import "./Emeks.css"

const EmeksRef = () => {
const paymentRef = useRef("");
const amountRef = useRef("");
const enddateRef = useRef("");
const rateRef = useRef("");
const monthsRef = useRef("");
const nameRef = useRef("");

const handleSubmit = (event)=>{
    event.preventDefault();


}

  return (
    <>
    <div className="container">
        <div className="wrap">
        <div className="header">
            <h5>Loan management system</h5>
        </div>
        <div className="menu">
            <ul>
             <li>Home</li>
             <li>Register</li>
             <span><li>Loan Management</li></span>
             <li>LogOut</li>
            </ul>
        </div>
        </div>

    
    <div className="main">
    <form >
          <div className="application">
            <h3>Loan Application Form</h3>
          </div>
        <div className="for">
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="">Loan Payment Start Date</label><br></br>
            <input type="text" />
            </div>
            <div className="form-one">
            <label htmlFor="">Loan Aount</label><br></br>
            <input type="text" />
            </div>
            </div>
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="">Loan Payment End Date</label><br></br>
            <input type="text" />
            </div>
            <div className="form-one">
            <label htmlFor="">Loan Rate</label><br></br>
            <input type="text" />
            </div>
            </div>
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="">Number of Months</label><br></br>
            <input type="text" />
            </div>
            <div className="form-one">
            <label htmlFor="">Name of Borrower</label><br></br>
            <select name="" id=""> <option value=""><input type="text" /></option></select>
           
            </div>
            </div>
        </div>

    </form>
    </div>
    </div>
    </>
  )
}

export default EmeksRef



