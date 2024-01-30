import React, { useRef } from 'react';
import "./Emeks.css"

const EmeksRef = () => {
const paymentstartdateRef = useRef("");
const amountRef = useRef("");
const enddateRef = useRef("");
const rateRef = useRef("");
const monthsRef = useRef("");
const nameRef = useRef("");
const users = {paymentstartdate:"", amount:"", enddate:"", rate:"", months:"", nameofborrower:"",}

const handleSubmit = (event)=>{
    event.preventDefault();

    if(paymentstartdateRef.current !==null){
      users.paymentstartdate = paymentstartdateRef.current.value;
    }
    if(amountRef.current !==null){
      users.amount = amountRef.current.value;
    }
    if(enddateRef.current !==null){
      users.enddate = enddateRef.current.value;
    }
    if(rateRef.current !==null){
      users.rate = enddateRef.current.value;
    }
    if(monthsRef.current !==null){
      users.months = monthsRef.current.value;
    }
    if(nameRef.current !==null){
      users.nameofborrower = nameRef.current.value;
    }
    console.log(users);
    




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
    <form onSubmit={handleSubmit}>
          <div className="application">
            <h3>Loan Application Form</h3>
          </div>
        <div className="for">
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="Loan payment start date" className='name'>Loan Payment Start Date</label><br></br>
            <input id='date' type="text" ref={paymentstartdateRef}/>
            </div>
            <div className="form-one">
            <label htmlFor="Loan amount" className='name'>Loan Amount</label><br></br>
            <input id='number' type="text" ref={amountRef}/>
            </div>
            </div>
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="loan payment end date" className='name'>Loan Payment End Date</label><br></br>
            <input id='date' type="text" ref={enddateRef}/>
            </div>
            <div className="form-one">
            <label htmlFor="loan rate" className='name'>Loan Rate</label><br></br>
            <input id='%' type="text" ref={rateRef}/>
            </div>
            </div>
            <div className="form-one-end">
            <div className="form-one">
            <label htmlFor="number of months" className='name'>Number of Months</label><br></br>
            <input id='text' type="text" ref={monthsRef}/>
            </div>
            <div className="form-one">
            <label htmlFor="" className='name'>Name of Borrower</label><br></br>
            <select name="text" id="name">
            <input  id ="name of borrower" type="text"  placeholder='select customers name' ref={nameRef}/>
              <option value="">select customers name</option>
              <option value="">David Clark</option>
            </select>
           
            </div>
            </div>
        </div>
        <button type='submit'>Submit</button>

    </form>
    </div>
    <div className="footer">
      <div className="emeks">
        <div className="h3">EMEKSMAN NIG LTD</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default EmeksRef



