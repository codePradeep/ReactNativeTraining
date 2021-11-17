import  React,{useState} from 'react';
import { Text, View,ImageBackground ,StyleSheet,Button } from 'react-native';

import styles from './style';
import Header from '../../common/Header';
import Abutton from '../../common/Abutton';
import Input from '../../common/Input';
import Label from '../../common/Label';
const image = { uri: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
import Logo from '../../common/Logo';

import * as Animatable from 'react-native-animatable';
 



const signup =()=> {
  
   return (
    <ImageBackground source={image} resizeMode="cover" style={{
        flex: 1,
        justifyContent: "center"
      }}>


          <Animatable.Text animation="fadeIn" iterationCount="infinite" direction="alternate" style={{color:"white",textAlign:"center",fontSize:45}}>WELCOME</Animatable.Text>
 <View style={{flex:1,marginHorizontal:20}}>  
<View style={{flex:0.9,backgroundColor:"rgba(0, 0, 0, 0.4)" ,borderTopLeftRadius:80,borderBottomRightRadius:80 ,marginVertical:20,}}>
    <View style={styles.container}>
      
    <Text style={{color:"white",textAlign:"center",fontSize:18,marginTop:20,marginBottom:8}}>Register Now</Text>
      
      
  
        <Label labelname="User Name"/>
      <Input inputplaceholder="User Name"/>
        <Label labelname="Email Id"/>
      <Input inputplaceholder="EX-abc@abc.com"/>
        <Label labelname="Password"/>
      <Input inputplaceholder="*********"/>
       <Label labelname="Re-enter Password"/>
      <Input inputplaceholder="********"/>
     
     <View style={{paddingTop:10}}>
      <Abutton title="Submit"/> 
       </View>
    </View>
</View>
</View> 

    </ImageBackground>
  
  );
} 

export default  signup