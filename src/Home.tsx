import React from "react";
import logo from "./images/logo.webp"
import "./Home.css"
import menu from "./images/menu.png"
import Soursop from "./images/Soursop.jpg"
import person1 from "./images/person1.jpg"
import halal from "./images/halal.webp"
import person2 from "./images/person2.jpg"
import person3 from "./images/person3.jpg"


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
                    <li><a href="#intro">About us</a></li>
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

           <section id="intro">
            <div className="bg">
            <div className="">
              <h3 className="id">who we are</h3>
            </div>
            <div className="hm">
              <h5 className="add">Home / who we are</h5>
            </div>
            </div>
            <div className="effect">
            <div className="foods">
              <h1 className="nam">NAM VIET FOODS & BEVERAGES</h1>
            </div>
            <div className="hilight">
              <p className="para">The Nam Viet Foods & Beverage Co., LTD is 100% Vietnamese<br></br> 
              owned with 25 years of experience in the beverage field for local markets<br></br>
              and the processing of goods for exporting companies in Vietnam.<br></br>
              In the second quarter of 2016 the owner of Nam Viet F&B decided<br></br>
              to expand to markets worldwide and rapidly conquer the trust of our<br></br>
              clients from the first order through quality control,<br></br>
              fast delivery and most importantly our main goal to service<br></br>
              client accounts after sale and client satisfaction.</p>
            </div>
            </div>
           </section>
           <section className="testimonials">
               <div className="testify">
                <h2 className="test">our testimonials</h2>

               </div>
                  <div className="first">
                  <div className="woman">
                    <div className="jons">
                  <img className="imgb" src={person1} alt="" />
                  <h5 className="ry">Mary Jons</h5>
                  </div>
                  
                  <p className="lorem">Lorem ipsum, dolor sit amet<br></br> 
                  Labore, quas similique eius voluptates <br></br>
                   dolores provident nesciunt aperiam <br></br>
                  Ad minus vero quasi fugit? impedit <br></br>
                   </p>
                   <img className="halal" src={halal} alt="" />
                  </div>
                  <div className="woman">
                    <div className="jons">
                  <img className="imgb" src={person3} alt="" />
                  <h5 className="ry">Patra Yung</h5>
                  </div>
                  
                  <p className="lorem">Lorem ipsum, dolor sit amet<br></br> 
                  Labore, quas similique eius voluptates <br></br>
                   dolores provident nesciunt aperiam <br></br>
                  Ad minus vero quasi fugit? impedit <br></br>
                   </p>
                   <img className="halal" src={halal} alt="" />
                  </div>
                  <div className="woman">
                    <div className="jons">
                  <img className="imgb" src={person2} alt="" />
                  <h5 className="ry">Mark Hills</h5>
                  </div>
                  
                  <p className="lorem">Lorem ipsum, dolor sit amet<br></br> 
                  Labore, quas similique eius voluptates <br></br>
                   dolores provident nesciunt aperiam <br></br>
                  Ad minus vero quasi fugit? impedit <br></br>
                   </p>
                   <img className="halal" src={halal} alt="" />
                  </div>
                  
                
                </div>
            
           </section>
           
        </>
    )
}
export default Home;