import React, { useState } from "react";
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "../../common";
import { COLORS, dummyData, icons, images, selectedTheme } from "../../config";
import { changeTheme } from "../../config/constants/theme";
import styles from "./style";


interface profileprops {
    navigation: any
    visible: any
    setvisibe: any
    setrender :any
            render:any
}
const ProfileScreen = (props: profileprops) => {
    const { 
        visible, 
        setvisibe ,
        setrender ,
            render
    } = props
    function onScroll(event:any) {
        const { nativeEvent } = event;
        const { contentOffset } = nativeEvent;
        const { y } = contentOffset;
        console.log(y)
      }
    
   
    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).headercontainer}>
                <Text style={styles(selectedTheme).headertext}>Profile</Text>
                <TouchableOpacity 
                onPress={()=>{setrender(!render),changeTheme()}} >
                
                    <Image source={icons.Icon.sun} style={styles(selectedTheme).headericons} />
                </TouchableOpacity>
            </View>
            <ScrollView 
           onScroll={onScroll}
            showsVerticalScrollIndicator={false}>
            <View style={styles(selectedTheme).subcontainer}>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles(selectedTheme).ImageContainer}>
                        <Image source={images.images.profile} style={styles(selectedTheme).profileicon} />
                        <View style={styles(selectedTheme).imagecontainerView}>
                            <View style={styles(selectedTheme).imageViewContainer}>
                                <Image source={icons.Icon.camera} style={styles(selectedTheme).camericon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles(selectedTheme).userheaderDataContainer}>
                        <Text style={styles(selectedTheme).username}>Pradeep Sharma </Text>
                        <Text style={styles(selectedTheme).body}>FullStack Developer</Text>
                        <ProgressBar containerstyle={styles(selectedTheme).progressbar} progress="58%" />
                        <View style={styles(selectedTheme).ProgressTextContainer}>
                            <Text style={styles(selectedTheme).progresstext}>Overall progress</Text>
                            <Text style={styles(selectedTheme).progresstext}>58 %</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles(selectedTheme).learnbutton}>
                        <Text style={styles(selectedTheme).learnbuttontext}>+ Become Member</Text>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={styles(selectedTheme).userdatacontainer}>
                {dummyData.UserData.map((item: any, index: any) => {
                    return (
                        <View key={index}>
                        <View style={styles(selectedTheme).usercontainer}>
                            <View style={styles(selectedTheme).subusercontainer}>
                                <Image source={item.icon} style={styles(selectedTheme).icon} />
                                <View style={styles(selectedTheme).textcontainer}>
                                    <Text style={styles(selectedTheme).label}>{item.label}</Text>
                                    <Text style={styles(selectedTheme).value}>{item.Value}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles(selectedTheme).rightimagecontainer}>
                                <Image source={icons.Icon.right_arrow} style={styles(selectedTheme).icon} />
                            </TouchableOpacity>
                        </View>
                        {index!=3?<View style={styles(selectedTheme).itemsaperater} />:null}
                        </View>

                    )
                })}

            </View>
            <View style={styles(selectedTheme).userdatacontainer}>
                {dummyData.Userdata2.map((item: any, index: any) => {
                     const [isEnabled, setIsEnabled] = useState(false);
                     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
                    return (
                        <View key={index}>
                        <View style={styles(selectedTheme).usercontainer}>
                            <View style={styles(selectedTheme).subusercontainer}>
                                <Image source={item.icon} style={styles(selectedTheme).icon} />
                                <View style={styles(selectedTheme).textcontainer}>
                                    <Text style={styles(selectedTheme).label}>{item.label}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles(selectedTheme).rightimagecontainer}>
                            {index==0?<Image source={icons.Icon.right_arrow} style={styles(selectedTheme).icon} />:
                                    <Switch
                                    trackColor={{ false: "#767577", true: COLORS.gray40 }}
                                    thumbColor={isEnabled ? COLORS.primary : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                  />
                                }
                            </TouchableOpacity>
                        </View>
                        {index!=2?<View style={styles(selectedTheme).itemsaperater} />:null}
                        </View>

                    )
                })}

            </View>
            </ScrollView>

        </View>
    )
}

export default ProfileScreen