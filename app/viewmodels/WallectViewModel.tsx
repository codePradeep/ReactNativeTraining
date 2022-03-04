import React from "react";
import Wallet from "../views/Wallet";

interface WalletViewModelprops{
    navigation:any
}
const WalletViewModel=(props:WalletViewModelprops)=>{
    const {navigation}=props
    
    return(
       <Wallet {...{
           navigation
       }} />
    )
}

export default WalletViewModel

