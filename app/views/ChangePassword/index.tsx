import React from "react";
import { View, Text, Image, ScrollView} from "react-native";
import { Coursebutton, Input } from "../../common";
import { Constant, icon } from "../../config";
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
                <Image source={icon.logo}  style={styles.Image}/>
            </View>

            <Text style={styles.welcometext}>Welcome!</Text>

            <View style={styles.ImageContainer}>
            <Input inputplaceholder={Constant.Current_Password} icon={icon.hiddeneye} />
            </View>
            <View style={styles.ImageContainer}>
            <Input inputplaceholder={Constant.password} icon={icon.hiddeneye} />
            </View>
            <View style={styles.ImageContainer}>
            <Input inputplaceholder={"Confirm Password"}icon={icon.hiddeneye} />
            </View>
            
            <Text />

            <Coursebutton title="Continue" Press={undefined}/>
            <Text />

            
            <Coursebutton  title="Back" Press={() =>navigation.goBack() }/>
           
            
        </View>
        </ScrollView>
    )
}
export default ChangePassword