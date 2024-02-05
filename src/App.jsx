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
import Modal from "./container/Modal"
import { useState } from "react"
import {GiPayMoney, GiReceiveMoney} from "react-icons/gi"
import Getupdate from "./Update/Getupdate"




function App() {

// const [isUpdateOpen, setIsUpdateOpen] = useState(false);
// const [UpdateRequestType, setUpdateRequestType] = useState("");

// const UpdatenewsoneRequestBox = ()=>{
//   setIsUpdateOpen(true);
//   setUpdateRequestType("one")
// }

// const UpdatenewstwoRequestBox = ()=>{
//   setIsUpdateOpen(true);
//   setUpdateRequestType("two");
// }














  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequestType, setmodalRequestType] = useState("");
  const [expense, setExpense] = useState([]);
  const [incomes, setIncomes] = useState([]);


  const onExpenseBoxClick = ()=>{
    setIsModalOpen(true);
    setmodalRequestType("expense")

  }
  const onIncomeBoxClick = ()=>{
    setIsModalOpen(true);
    setmodalRequestType("income")

  }

  const addExpenseHandler = (description, amount)=>{

  }
  const addIncomeHandler = (description, amount)=>{

  }

 return(

  <div className="App">
{/* {isUpdateOpen && <Getupdate setIsUpdateOpen ={setIsUpdateOpen} 
   UpdateRequestType = {UpdateRequestType}/>}
  
  <div className="Getnews">
    <div className="news">
    <div className="news-one" onClick={UpdatenewsoneRequestBox}>
    <h3 className="each-day">News-one </h3>
    </div>
    <div className="news-one" onClick={UpdatenewstwoRequestBox}>
    <h3 className="each-day">News-two</h3>
    </div>
    </div>
  </div> */}













    <Heading/>
    {isModalOpen && <Modal setIsModalOpen = {setIsModalOpen} 
    modalRequestType = {modalRequestType}/>}
    <div className="content">
      <div className="box-wrapper">
        <div className="box-expense" onClick={onExpenseBoxClick}>
        <GiPayMoney size={100} color="red"/>
        <p>Add Expense</p>
        </div>
        <div className="box-income" onClick={onIncomeBoxClick}>
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
  
 
 )
}

export default App
