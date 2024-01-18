import React from "react";
import logo from "./images/logo.webp"
import "./Home.css"
import menu from "./images/menu.png"


function Home(){
    return(
        <>
        <header>
            <div className="container">
            <div className="menu">
                <img className="mens" src={menu} alt="" />
                <h5>MENU</h5>
            </div>
            <div className="container2">
            <div className="log">
             <img className="img1" src={logo} alt="" />
            </div>
            <div className="nav">
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
            </div>

            </div>
            </div>

        </header>
        </>
    )
}
export default Home;