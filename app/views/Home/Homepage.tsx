
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

            <Button title=" go to login" onPress={() => navigation.navigate('login')}/>
        
            {/* <Button title=" go to redux counter" onPress={() => navigation.navigate('counter')}/> */}
            {/* <Button title=" go to Api call" onPress={() => navigation.navigate('Apicalldemo')}/>
            <Button title=" redux Api call" onPress={() => navigation.navigate('reduxApicalldemo')}/> */}
            <Button title=" Api call" onPress={() => navigation.navigate('calldemo')}/>
            
        </View>
    )
}
export default Homepage;