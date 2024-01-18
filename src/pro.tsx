import React from "react";
import "./pro.css";
import apple from "./images/apple.jpg";

function Project(){
    return(
        <>
        <header>
            <nav>
             <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About us</a></li>
             </ul>
            </nav>
            <img src={apple} alt="" />
        </header>
        </>
    )
}

export default Project