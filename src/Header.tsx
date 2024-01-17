import React from "react";
import "./MyHeader.css"

function MyHeader(){
    return(
        <>
        <h2>Stringcode Limited</h2>
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
        </>
    )

}
export default MyHeader;