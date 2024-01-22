import React from "react";

function Users(){
    return(
        <>
        <h2>Login Details</h2>
        <p>
            Username:
            <input type="text" />
        </p>
        <p>
            Password:
            <input type="password" />
        </p>
        <Button/>
        </>
        
    )
}

function Button(){
    return(
        <>
        <button>login</button>
        </>
    )
}

function Signin(){
    return(
        <>
        <h2>Kindly enter your details</h2>
        </>
    )
}

function Validate(){
    let Username = "Doris";
    let password = "1234";
    return(
        <>
        {Username? <Users/>:<Signin/>}
        </>
    )
}
export default Validate;