import React, { useState } from "react";
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "../../common";
import { COLORS, dummyData, icons, images, selectedTheme } from "../../config";
import styles from "./style";


interface profileprops {
    navigation: any
    visible: any
    setvisibe: any
}
const ProfileScreen = (props: profileprops) => {
    const { visible, setvisibe } = props
   
    return (
        <View style={styles.mainconatiner}>
            <View style={styles.headercontainer}>
                <Text style={styles.headertext}>Profile</Text>
                <TouchableOpacity onPress={setvisibe}>
                    <Image source={icons.Icon.sun} style={styles.headericons} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subcontainer}>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.ImageContainer}>
                        <Image source={images.images.profile} style={styles.profileicon} />
                        <View style={styles.imagecontainerView}>
                            <View style={styles.imageViewContainer}>
                                <Image source={icons.Icon.camera} style={styles.camericon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.userheaderDataContainer}>
                        <Text style={styles.username}>Pradeep Sharma </Text>
                        <Text style={styles.body}>FullStack Developer</Text>
                        <ProgressBar containerstyle={styles.progressbar} progress="58%" />
                        <View style={styles.ProgressTextContainer}>
                            <Text style={styles.progresstext}>Overall progress</Text>
                            <Text style={styles.progresstext}>58 %</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.learnbutton}>
                        <Text style={styles.learnbuttontext}>+ Become Member</Text>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={styles.userdatacontainer}>
                {dummyData.UserData.map((item: any, index: any) => {
                    return (
                        <View>
                        <View style={styles.usercontainer}>
                            <View style={styles.subusercontainer}>
                                <Image source={item.icon} style={styles.icon} />
                                <View style={styles.textcontainer}>
                                    <Text style={styles.label}>{item.label}</Text>
                                    <Text style={styles.value}>{item.Value}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.rightimagecontainer}>
                                <Image source={icons.Icon.right_arrow} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        {index!=3?<View style={styles.itemsaperater} />:null}
                        </View>

                    )
                })}

            </View>
            <View style={styles.userdatacontainer}>
                {dummyData.Userdata2.map((item: any, index: any) => {
                     const [isEnabled, setIsEnabled] = useState(false);
                     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
                    return (
                        <View>
                        <View style={styles.usercontainer}>
                            <View style={styles.subusercontainer}>
                                <Image source={item.icon} style={styles.icon} />
                                <View style={styles.textcontainer}>
                                    <Text style={styles.label}>{item.label}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.rightimagecontainer}>
                            {index==0?<Image source={icons.Icon.right_arrow} style={styles.icon} />:
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
                        {index!=2?<View style={styles.itemsaperater} />:null}
                        </View>

                    )
                })}

            </View>
            </ScrollView>

        </View>
    )
}

export default ProfileScreen