import React from "react";
import { Icon } from "../config";

import Homepage from "../views/Home/Homepage";

interface Homemodelprops {
    navigation: any


}



const Homemodel =(props:Homemodelprops)=>{
    const {navigation} = props 

    const RideType=[
        {
            name:"Ride",
            image:Icon.Car
        },
        {
            name:"Intercity",
            image:Icon.Comfortcar
        },
    ]
    const buttons=[
        {
            icon:Icon.star,
            name:"Choose a saved place"
        },
        {
            icon:Icon.location,
            name:"Set destination on map"
        }
    ]

    return(
        <Homepage  navigation={navigation} 
        {...{
            RideType,
            buttons
        }}
        
        />
    )
}
export default Homemodel;