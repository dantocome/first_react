import React from "react";
import logo from "./images/logo.webp"
import "./Home.css"


function Home(){
    return(
        <>
        <header>
            <div className="log">
             <img className="img1" src={logo} alt="" />
            </div>
            <nav>
                <ul className="list">
                    <div className="home">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About us</a></li>
                    </div>
                    
                    <div className="bt">
                    <span><button className="btn">SELECT LANGUAGE</button></span>
                    </div>
                    
                </ul>
                
            </nav>
        </header>
        </>
    )
}
export default Home;