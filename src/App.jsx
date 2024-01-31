import Welcome from "./Welcome"
import MyHeader from "./Header"
import Maincontent from "./content"
import States from "./States"
import "./assets/module/default.css"
import Authenticate from "./user/Login"
import Home from "./Home"
import Home2 from "./Home2"
import Validate from "./Users"
import Person from "./props/person"
import Cars from "./props/cars"
import Counter from "./myState/Counter"
import Lightstate from "./myState/Ison"
import InputForm from "./myState/Input"
import LoginRef from "./myState/LoginRef"
import ContactHook from "./myState/ContactHook"
import EmeksRef from "./component/EmeksRef"
import Heading from "./container/Heading"
import Hero from "./container/Hero"
import Footer from "./container/Footer"
import {GiPayMoney, GiReceiveMoney} from "react-icons/gi"



function App() {
 return(
  <>
  <div className="App">

    <Heading/>
    <div className="content">
      <div className="box-wrapper">
        <div className="box-expense">
        <GiPayMoney size={100} color="red"/>
        <p>Add Expense</p>
        </div>
        <div className="box-income">
        <GiReceiveMoney size={100} color="green"/>
        <p>Add Income</p>
        </div>
      </div>
    </div>
    <Footer/>
    
  {/* <EmeksRef/> */}
  {/* <ContactHook/> */}
  {/* <LoginRef/> */}
  {/* <Lightstate/>  */}
  {/* <InputForm/> */}
  {/* <Counter/>}
  {/* <Cars carname="venza" color="red" brand={2023}/>
   <Person name="Obi" age={14}/>
   <Person name="Amaka" age={34} manager = "yes"/>
   <Person name="Daniel" age={24} manager = "yes"/> */}
  {/* <MyHeader/> */}
  {/* <Welcome/> */}
  {/* <MyHeader/> */}
  {/* <Maincontent/> */}
   {/* <States/> */}
  {/* <Authenticate/>  */}
   {/* <Home/>  */}
   {/* <Home2/> */}
   {/* <Validate/> */}
  </div>
  
 </>
 )
}

export default App
