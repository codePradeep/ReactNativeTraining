import React from "react";
import { View, Text,Button, Image} from "react-native";
import { Input } from "../../common";

interface loginpageprops{
    navigation:any
}

const Loginpage=(props:loginpageprops)=>{
    const{navigation}=props
   
    return(
        <View style={{flex:1}}>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
            
            
        </View>
    )
}
export default Loginpage;