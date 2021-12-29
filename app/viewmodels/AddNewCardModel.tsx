import React, { useState } from "react";
import AddNewCard from "../views/Add New Card";
import  Loginpage from '../views/Login/Loginpage'
interface AddNewCardModelprops{
    navigation:any
}
const AddNewCardModel=(props:AddNewCardModelprops)=>{
    const {navigation}=props
    const [toggle, settogle] = useState(false)
    const buttonclicked=()=>{
        if( toggle==true){
            settogle(false)
        }else{
            settogle(true)
        }
    }
    const [isvalid, setisvalid] = useState(true)
    const validate = (text: string) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");

            setisvalid(false);
        }
        else {
            setisvalid(true)
        }
    }

    const carddata={
        cardnumber:"123",
        Holdername:"Pradeep",
        expirydate:"23/22",
        cvv:"123",

    }
    const [Data,setData]=useState(carddata)





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