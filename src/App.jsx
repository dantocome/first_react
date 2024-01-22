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


function App() {
 return(
  <>
   <Person name="Obi" age={14}/>
   <Person name="Amaka" age={34} manager = "yes"/>
   <Person name="Daniel" age={24} manager = "yes"/>
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
