
import React from "react";

function Person(props){
    return(
        <>
        <div className="person">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Rank:{props.manager? "Manager": "Junior Staff"}</p>

        </div>
        
        
        </>
    )
}
export default Person;