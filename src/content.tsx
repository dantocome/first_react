import React from "react"

function Mergeus(){
    return(
        <button>Join us Now</button>
    )
}

function Maincontent(){
    return(
        <>
        <h2>Our team Names</h2>
        <ul>
            <li>Daniel</li>
            <li>Joseph</li>
            <li>Moris</li>
        </ul>
        <div className="Join">
            <h3>Welcome</h3>
         <Mergeus/>
        </div>
        </>
        
     )
}
export default Maincontent;