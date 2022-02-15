import React,{useState} from "react";
import { EmailValidate, PasswordValidate } from "../config/constants/Validation";
import  Loginpage from '../views/Login/Loginpage'
interface loginmodelprops{
    navigation:any
}
const Loginmodel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(true)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);


    const submit = (Email: string, password: string) => {
      console.log("button pressed",isvalidEmail,isvalidPassword)

        setisvalidEmail(EmailValidate(Email))
        setisvalidPassword(PasswordValidate(password))
        //  isvalidEmail==true&&isvalidPassword==true ? navigation.navigate(Screen.DrawerNavigation):null
      }
    return(
        <Loginpage
         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         isvalidEmail={isvalidEmail}
         isvalidPassword={isvalidPassword}
         Emailinpute={(text: string) => setEmail(text)}
         EnterPassword={(text: string) => setpassword(text)}
         isEnabled={isEnabled}
         submit={() => submit(Email, password)}
         
         />
    )
}
export default Loginmodel;