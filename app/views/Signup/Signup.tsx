import  React,{useState} from 'react';
import { Text, View,ImageBackground ,ScrollView,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard, Alert, Button, } from 'react-native';

import styles from './style';
import Abutton from '../../common/Abutton';
import Input from '../../common/Input';
const image = { uri: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
import Logo from '../../common/Logo';


import * as Animatable from 'react-native-animatable';
 


  interface Signupeprops {
    Input:any
    navigation: any

    username:string
    email:string
    password:string
    cpassword:string
    usernameinput:any
    data: object
    check_textInputChange:any
    maxLength:number

}




const Signup =(props:Signupeprops)=> {
  
  
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
    
  
   return (


    <ImageBackground source={image} resizeMode="cover" style={styles.ImageBackground}>
        <ScrollView>

          <Animatable.Text animation="fadeIn" iterationCount="infinite" direction="alternate" style={{color:"white",textAlign:"center",fontSize:40}}>WELCOME</Animatable.Text>
          
  
          
 <View style={{flex:1, marginHorizontal:30}}>  
 
 
<View style={styles.boxcontainer}>
    <View style={styles.container}>



    <Text style={{color:"white",textAlign:"center",fontSize:18,marginTop:10,marginBottom:5}}>Register Now</Text>
      
      
    
  
       
      <Input  labelname="User Name" 
              inputplaceholder="User Name"
              maxLength={16} 
              changeText={(text:any)=>setUsername(text)} />

{ isValidUser? null:<Text style={styles.error}> invalid Username</Text> }

       
      <Input labelname="Email ID" 
              inputplaceholder="EX-abc@abc.com" 
              maxLength={16} 
              changeText={(text:any)=>setEmail(text)}  />

{ isValidEmail? null:<Text style={styles.error}> Invalid Email Id</Text> }

        
      <Input labelname="Password" 
             inputplaceholder="*********"
             maxLength={16} 
             changeText={(text:any)=>setpassword(text)}/>

{isValidPassword? null:<Text style={styles.error}> Invalid Password:Minimum 8 characters, at least one letter and one number:</Text>}

     
      <Input labelname="Re-enter Password" 
             inputplaceholder="********"
             maxLength={12} 
             changeText={(text:any)=>setcpassword(text)}/>

{isPasswordSame? null:<Text style={styles.error}> Input Same Password</Text>}

     
     <View style={{paddingTop:10}}>
      <Abutton title="Submit" press={submit}/> 
      
       </View>
       
    </View>

    
</View>

</View> 
  

</ScrollView>

    </ImageBackground>
    
   
  
  );
} 

export default  Signup