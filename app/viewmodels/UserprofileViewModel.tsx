import React from "react";
import { Icon, profileList } from "../config";
import Userprofile from "../views/UserProfile";

interface UserprofileViewModel{
    navigation:any
}
const UserprofileViewModel=(props:UserprofileViewModel)=>{
    const {navigation}=props

    const  data=[
        {
            image:Icon.help,
            name:"Help"
        },
        {
            image:Icon.email,
            name:"Wallet"
        },
        {
            image:Icon.clock,
            name:"Trips"
        }
    ]









    return(

        <Userprofile 
        {...{
            navigation,
            profileList,
            data
        }}
        />


        
    )
}
export default UserprofileViewModel