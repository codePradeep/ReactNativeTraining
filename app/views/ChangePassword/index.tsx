import React from "react";
import { View, Text,Button, Image, ScrollView} from "react-native";
import { Coursebutton, Input } from "../../common";

interface loginpageprops{
    navigation:any
}

const ChangePassword=(props:loginpageprops)=>{
    const{navigation}=props
   
    return(
        <ScrollView>
        <View style={{flex:1,justifyContent:"center" ,marginHorizontal:30}}>
            
            <View style={{alignSelf:"center"}}>
                <Image source={require('../../assets/logo.png')}  style={{height:200,width:200,resizeMode:"contain"}}/>
            </View>

            <Text style={{fontSize:35 ,alignSelf:"center",color:"black",fontWeight:"500"}}>Welcome!</Text>

            <View style={{marginTop:20,alignSelf:"center"}}>
            <Input inputplaceholder={"Current Password"} icon={require('../../assets/hidden.png')} />
            </View>
            <View style={{marginTop:20,alignSelf:"center"}}>
            <Input inputplaceholder={"Password"} icon={require('../../assets/hidden.png')} />
            </View>
            <View style={{marginTop:20,alignSelf:"center"}}>
            <Input inputplaceholder={"Confirm Password"} icon={require('../../assets/hidden.png')} />
            </View>
            
            <Text />

            <Coursebutton title="Continue" />
            <Text />

            
            <Coursebutton  title="Back" Press={() =>navigation.navigate('course')}/>
           
            
        </View>
        </ScrollView>
    )
}
export default ChangePassword