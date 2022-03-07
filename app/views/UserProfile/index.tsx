import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon, Screens } from "../../config";
import styles from "./style";
interface userprofileprops {
    navigation: any
    profileList: {
        image: any;
        name: string;
    }[]
    data: {
        image: any;
        name: string;
    }[]
}
const Userprofile = (props: userprofileprops) => {
    const { navigation,profileList ,data} = props
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(Screens.HomeViewModel)} >
                <Image source={Icon.close} style={styles.icons} />
            </TouchableOpacity>
            <View style={styles.Header}>
                <View >
                    <Text style={styles.H1}>Pradeep Sharma </Text>
                    <View style={styles.rating}>
                        <Image source={Icon.star} style={styles.smallicon}></Image>
                        <Text>5.0</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate(Screens.UserprofileViewModel)}>
                    <Image source={Icon.user} style={styles.UserIcon} />
                </TouchableOpacity>

            </View>

            <View style={styles.boxs}>
                {data.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index}
                        style={styles.boxstyle}>
                            <Image source={item.image} style={styles.lighticon}/>
                            <Text style={styles.P1}>{item.name}</Text>                            
                        </TouchableOpacity>
                    )
                })}

            </View>
            
                {profileList.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} style={styles.list}>
                            <Image source={item.image}style={styles.icons} />
                            <Text style={styles.listitem}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            

        </View>
    )
}

export default Userprofile