import Welcome from "./Welcome"
import MyHeader from "./Header"
import Maincontent from "./content"
import States from "./States"
import "./assets/module/default.css"
import Authenticate from "./user/Login"
function App() {
 return(
  <>
  {/* <MyHeader/>
  <Welcome/>
  <MyHeader/>
  <Maincontent/>
  <States/> */}
  <Authenticate/>
 </>
 )
}

export default App
