import React,{useState} from "react";
import  Loginpage from '../views/Login/Loginpage'
import Signup from "../views/Signup/Signup";
interface Signupmodelprops{
    navigation:any
   
    

}
const Signupmodel = (props:Signupmodelprops)=>{
    
    const {navigation,...rest}=props
    
    
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [isValidEmail, setisValidEmail] = useState(true);
    const [isValidUser, setisValidUser] = useState(true);
    const [isValidPassword, setisValidPassword] = useState(true);
    const [isPasswordSame, setisPasswordSame] = useState(true);

    const submit=()=>{
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const usernameRegex = /^[a-zA-Z0-9._]$/
        const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    
                if(emailRegex.test(Email)){
                    setisValidEmail(true);
                }else{
                  setisValidEmail(false);
                }
    
                  if(usernameRegex.test(Username)){
                    setisValidUser(true);
                }else{
                    setisValidUser(false);
                }
    
                    if(passwordRegex.test(password)){
                      setisValidPassword(true);
                  }else{
                    setisValidPassword(false);
                  }
    
                  if(password==cpassword){
                    setisPasswordSame(true);
                  }else{
                  setisPasswordSame(false);
                  }
        
        
        console.log("email=>",Email)
        console.log("name=>",Username)
        console.log("password=>",password)
        console.log("cunform password=>",cpassword)
      }


    
    return(
        <Signup 
        
             navigation={navigation}
            submit={submit}

            usernameinput={(text: any) => setUsername(text)}
            emailinpute={(text: any) => setEmail(text)}
            re_enterPassword={(text: any) => setcpassword(text)}
            enterPassword={(text: any) => setpassword(text)}
            isValidEmail={isValidEmail}
            isValidUser={isValidUser}
            isValidPassword={isValidPassword}
            isPasswordSame={isPasswordSame}

            {...rest}        />
    )
}
export default Signupmodel;