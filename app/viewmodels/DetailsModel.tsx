import React from "react";
import ChangePassword from "../views/ChangePassword";
import Details from "../views/Details";

interface DetailsModelprops{
    navigation:any
}

const DetailsModel=(props:DetailsModelprops)=>{
    const {navigation}=props
    return(
        <Details  />

    )
}
export default DetailsModel