import React from "react";

function Cars(props){
    return(
        <>
        <p>My Carname:{props.carname}</p>
        <p>My car color:{props.color}</p>
        <p>My car brand:{props.brand}</p>
        </>
    )
}
export default Cars;
