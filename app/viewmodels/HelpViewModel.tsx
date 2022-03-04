import React from "react";
import HelpScreen from "../views/Help";

interface HelpViewModelprops{
    navigation:any
}
const HelpViewModel=(props:HelpViewModelprops)=>{
    const {navigation}=props

    const data=[
        {
            name:"Help with a trip"
        },
        {
            name:"Account and Payment Options"
        },
        {
            name:"More"
        },
        {
            name:"A Guide to Uber"
        },
        {
            name:"Uber Bus/Uber Shuttle issue"
        },
        {
            name:"Signing up"
        },
        {
            name:"Accessibility"
        },
        {
            name:"Uber Money"
        },
        

    ]
    
    return(
        <HelpScreen {...{
            navigation,
            data
        }}/>
    )
}

export default HelpViewModel

