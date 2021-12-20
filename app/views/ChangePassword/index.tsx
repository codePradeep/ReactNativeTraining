import React from "react";
import { View, Text, Image, ScrollView} from "react-native";
import { Coursebutton, Input } from "../../common";
import styles from "./style";

interface loginpageprops{
    navigation:any
}

const ChangePassword=(props:loginpageprops)=>{
    const{navigation}=props
   
    return(
        <ScrollView>
        <View style={styles.MainContainer}>
            
            <View style={styles.ImageContainer}>
                <Image source={require('../../assets/logo.png')}  style={styles.Image}/>
            </View>

            <Text style={styles.welcometext}>Welcome!</Text>

            <View style={styles.ImageContainer}>
            <Input inputplaceholder={"Current Password"} icon={require('../../assets/hidden.png')} />
            </View>
            <View style={styles.ImageContainer}>
            <Input inputplaceholder={"Password"} icon={require('../../assets/hidden.png')} />
            </View>
            <View style={styles.ImageContainer}>
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