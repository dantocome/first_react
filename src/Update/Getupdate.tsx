import React from 'react'
import "./Update.css"

const Getupdate = ({setIsUpdateOpen, UpdateRequestType}) => {
  return (
    <div className='Update'>
        <div className="update-one">
            <h2>{UpdateRequestType==="one"? "News-one": "News-two"}</h2>
            <p>Lorem ipsum dolor sit amet<br></br> 
               consectetur adipisicing elit.<br></br>
               consectetur adipisicing elit.
            </p>
            <button>Dismiss</button>
        </div>
      
    </div>
  )
}

export default Getupdate
