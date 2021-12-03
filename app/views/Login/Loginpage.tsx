import React from "react";
import { View, Text,Button} from "react-native";
import styles from "./style";

interface loginpageprops{
    navigation:any
}

const Loginpage=(props:loginpageprops)=>{
    const{navigation}=props
   
    return(
        <View style={styles.Container}>
            <Text style={styles.paragraph}>this is login page </Text>
            <Button title=" go to Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}
export default Loginpage;