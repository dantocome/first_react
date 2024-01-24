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


function App() {
 return(
  <>
    <Lightstate/> 
  {/* <InputForm/> */}
  {/* <Counter/>
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
  
 </>
 )
}

export default App
