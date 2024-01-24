import React, { useState } from "react";


function InputForm(){
    const [InputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleChanges = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmittedValue(InputValue);
       
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name:</label>
          <input type="text" onChange={handleChanges}/>
          <button type="submit">Send</button>
        </form>

        {submittedValue && <p>you submitted:{submittedValue}</p>}
        
        </>
    )
}
export default InputForm;