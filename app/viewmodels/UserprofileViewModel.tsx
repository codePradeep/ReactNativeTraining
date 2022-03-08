import React from "react";
import { Icon, profileList, Screens } from "../config";
import Userprofile from "../views/UserProfile";

interface UserprofileViewModel{
    navigation:any
}
const UserprofileViewModel=(props:UserprofileViewModel)=>{
    const {navigation}=props

    const  data=[
        {
            image:Icon.help,
            name:"Help",
            route:Screens.HelpViewModel
        },
        {
            image:Icon.email,
            name:"Wallet",
            route:Screens.WalletViewModel
        },
        {
            image:Icon.clock,
            name:"Trips",
            route:undefined
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