//hello this is just a test 
import React from "react";
import { View, Text,Button} from "react-native";
import styles from "./style";



const Loginpage=()=>{
   
   
    return(
        <View style={styles.Container}>
            <Text style={styles.paragraph}>this is login page </Text>
            <Button title=" go to Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}
export default Loginpage;