
import React from "react";
import { View, Text,Button} from "react-native";
import styles from "./style";

interface Homepageprops {
    navigation: any


}

const Homepage=(props:Homepageprops)=>{
    const {navigation} = props
    return(
        <View style={styles.Container} >
            <Text style={styles.paragraph}> This is Home page </Text>

            <Button title="OTP with Custom Number" onPress={() => navigation.navigate('PhoneOtp')}/>
        
            <Button title="Auth" onPress={() => navigation.navigate('PhoneAuth')}/>
            
        </View>
    )
}
export default Homepage;