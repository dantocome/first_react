import React from "react";




let states = ["Rivers", "Delta", "Anambra", "Kogi"];
let categories = ["Select:", "Marketing", "Accounting", "Circuation"];


function States(){
    return(
        <>
        <h2>list of states</h2>
      <ul>
        {states.length===0 && <p>list not found</p>}
     {states.map((state, index)=>(
        <li >{state} {index}</li>
     ))}
      </ul>
      
    
        <select>
            {categories.map((category, index)=>(
                <option value="">{category}</option>
            ))}
        </select>
        </>
    )
}
export default States;