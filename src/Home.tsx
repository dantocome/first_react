import React from "react";
import logo from "./images/logo.webp"
import "./Home.css"
import menu from "./images/menu.png"
import Soursop from "./images/Soursop.jpg"


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
                    <li><a href="#about">About us</a></li>
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
          
          <section>
           <div className="picture">
           <div className="text">
              <h1>REJUVENATE<br></br> Your Health Through<br></br>
              Quality and Well Tested,<br></br> processed
              Nature Drinks
              </h1>
              <p>Look out for some of our vacinating health nuggets:<br></br>
              Leveragin on great testimonials across the globe.</p>
              <div className="nug">
              <div className="nug1">
                <h5>We give the Best Natural Nutitional Advice</h5>
              </div>
              <div className="nug1">
                <h5>We give the Best Natural Nutitional Advice</h5>
              </div>
              <div className="nug1">
                <h5>We give the Best Natural Nutitional Advice</h5>
              </div>
              </div>

           </div>
           <div className="text">
            <img className="sour" src={Soursop} alt="" />
            </div>
           </div>
           </section>

           <section className="bg">
            <div className="">
              <h3 className="id">who we are</h3>
            </div>
            <div className="hm">
              <h5 className="add">Home / who we are</h5>
            </div>
           
           </section>
        </>
    )
}
export default Home;