import React, { useState } from "react";
import { EmailValidate } from "../config/validation";
import AddNewCard from "../views/Add New Card";
import  Loginpage from '../views/Login/Loginpage'
interface AddNewCardModelprops{
    navigation:any
}
const carddata={
    cardnumber:"123",
    Holdername:"Pradeep",
    expirydate:"23/22",
    cvv:"123",

}
const AddNewCardModel=(props:AddNewCardModelprops)=>{
    const {navigation}=props
    const [toggle, settogle] = useState(false)
    const [isvalid, setisvalid] = useState(true)
    const [Data,setData]=useState(carddata)

    const buttonclicked=()=>{
        if( toggle==true){
            settogle(false)
        }else{
            settogle(true)
        }
    }
    
    const validate = (text: string) => {
        setisvalid(EmailValidate(text))
    }

    return(
        <AddNewCard      
          navigation={navigation}
          isvalid={isvalid}
            setisvalid={setisvalid}
            validate={validate}
            buttonclicked={buttonclicked}
            toggle={toggle}
            Data={Data}
            setData={setData}
           />
    )
}
export default AddNewCardModel;