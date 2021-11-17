import React from "react";
import { View, Text,Button} from "react-native";

interface loginpageprops{
    navigation:any
}

const Loginpage=(props:loginpageprops)=>{
    const{navigation}=props
   
    return(
        <View>
            <Text>this is login page </Text>
            <Button title=" go to Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}
export default Loginpage;