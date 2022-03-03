import React from "react";
import { Icon } from "../config";

import Homepage from "../views/Home/Homepage";

interface HomeViewModelprops {
    navigation: any


}



const HomeViewModel =(props:HomeViewModelprops)=>{
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
        <Homepage 
        {...{
            navigation,
            RideType,
            buttons
        }}
        
        />
    )
}
export default HomeViewModel;