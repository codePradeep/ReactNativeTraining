import React from "react";

import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}

const Homemodel =(props:Homemodelprops)=>{
    const {navigation} = props 

    return(
        <Homepage  navigation={navigation} />
    )
}
export default Homemodel;