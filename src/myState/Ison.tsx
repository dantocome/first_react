import React, { useState } from "react";


function Lightstate(){
    const [Ison, setIson] = useState(false);
    const Lightup = ()=>{
        setIson((Ison)=> !Ison)
    }
    return(
        <>
        <p>The light is:{Ison? "on": "off"}</p>
        <button onClick={Lightup}>Switch</button>
        </>
    )

}
export default Lightstate;