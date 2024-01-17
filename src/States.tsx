import React from "react";


let states = ["Rivers", "Delta", "Anambra", "Kogi"];

// states.length = 0
function States(){
    return(
        <>
        <ul className="men">
            {states.length===0 && <p>states not found</p>}
        {states.map((state, index)=>(
            <li>{state}</li>
        ))}
        </ul>
        
        
        </>
    )
}
export default States;