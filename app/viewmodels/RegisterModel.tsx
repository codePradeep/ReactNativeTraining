import React,{useState} from "react";
import { EmailValidate, PasswordValidate, UsernameValidation } from "../config/constants/Validation";
import Register from "../views/Register";
interface loginmodelprops{
    navigation:any
}
const RegistrModel =(props:loginmodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [selected,setselected]=useState(false)
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [Username, setUsername] = useState("");
  const [isvalidEmail, setisvalidEmail] = useState(true)
  const [isvalidPassword, setisvalidPassword] = useState(true)
  const [isvalidUsername, setisvalidUsername] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);


    const submit = (Email: string, password: string,Username:string) => {
      console.log("button pressed",isvalidEmail,isvalidPassword)
      setisvalidUsername(UsernameValidation(Username))
        setisvalidEmail(EmailValidate(Email))
        setisvalidPassword(PasswordValidate(password))
        //  isvalidEmail==true&&isvalidPassword==true ? navigation.navigate(Screen.DrawerNavigation):null
      }
    return(
        <Register

         navigation={navigation} 
         visible={visible}
         setvisibe={setvisibe}
         selected={selected}
         setselected={setselected}
         isvalidEmail={isvalidEmail}
         isvalidPassword={isvalidPassword}
         isvalidusername={isvalidUsername}
         Emailinpute={(text: string) => setEmail(text)}
         EnterPassword={(text: string) => setpassword(text)}
         EnterUserName={(text:string)=>setUsername(text)}
         isEnabled={isEnabled}
         submit={() => submit(Email, password,Username)}

         />
    )
}
export default RegistrModel;