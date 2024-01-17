import React from "react";

function Login(){
    return(
        <>
     <h2>Kindly enter your details</h2>
     <p>User:<input type="text"/></p>
     <p>Password:<input type="password"/></p>
     <Button />
    </>
    )
}

function Button(){
    return(
    <>
    <div>
        <button>Login</button>
    </div>
    </>
    )
}

function Signup(){
    return(
        <h2>Kindly register to use the app</h2>
    )
}

function Authenticate(){

    let username = "";
    let password = "1234"
    return(
        <>
        {username?<Login/>:<Signup/>}

        </>
    )
}
export default Authenticate;