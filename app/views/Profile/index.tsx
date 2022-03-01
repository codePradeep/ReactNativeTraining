import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Modal, ScrollView, Switch, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ProgressBar } from "../../common";
import { buttons, COLORS,  icons, images, Screensdata, selectedTheme } from "../../config";
import dummyData from "../../config/constants/dummyData";
import { changeTheme } from "../../config/constants/theme";
import styles from "./style";

interface profileprops {
    navigation: any
    visible: any
    setvisibe: any
    setrender: any
    render: any
    modalVisible: any
    setModalVisible: any
    launchLibrary: any
    openCamara: any
    imageUriGallary: any
    dispachcall:any
}
const ProfileScreen = (props: profileprops) => {
    const { navigation,
        visible,
        setvisibe,
        setrender,
        render,
        modalVisible, setModalVisible,
        openCamara, launchLibrary,
        imageUriGallary,
        dispachcall
    } = props



    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).MainSubContainer} >
                <View style={styles(selectedTheme).headercontainer}>
                    <Text style={styles(selectedTheme).headertext}>{Screensdata.Profile.name}</Text>
                    <TouchableOpacity
                        onPress={() => { setrender(!render), changeTheme() ,dispachcall()}} >

                        <Image source={icons.Icon.sun} style={styles(selectedTheme).headericons} />
                    </TouchableOpacity>
                </View>
                <ScrollView

                    showsVerticalScrollIndicator={false}>
                    <View style={styles(selectedTheme).subcontainer}>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles(selectedTheme).ImageContainer}
                                onPress={() => setModalVisible(true)}
                            >
                                <Image source={{ uri: imageUriGallary }} style={styles(selectedTheme).profileicon} />
                                <View style={styles(selectedTheme).imagecontainerView}>
                                    <View style={styles(selectedTheme).imageViewContainer}>
                                        <Image source={icons.Icon.camera} style={styles(selectedTheme).camericon} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles(selectedTheme).userheaderDataContainer}>
                                <Text style={styles(selectedTheme).username}>{Screensdata.Instructor.name} </Text>
                                <Text style={styles(selectedTheme).body}>{Screensdata.Instructor.des}</Text>
                                <ProgressBar containerstyle={styles(selectedTheme).progressbar} progress="90%" />
                                <View style={styles(selectedTheme).ProgressTextContainer}>
                                    <Text style={styles(selectedTheme).progresstext}>{Screensdata.Profile.Overallprogress}</Text>
                                    <Text style={styles(selectedTheme).progresstext}>{Screensdata.Profile.percentage}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles(selectedTheme).learnbutton}

                                onPress={() => navigation.navigate("MembershipModel")}>
                                <Text style={styles(selectedTheme).learnbuttontext}>{buttons.becomemember}</Text>
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
                                    {index != 3 ? <View style={styles(selectedTheme).itemsaperater} /> : null}
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
                                            {index == 0 ? <Image source={icons.Icon.right_arrow} style={styles(selectedTheme).icon} /> :
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
                                    {index != 2 ? <View style={styles(selectedTheme).itemsaperater} /> : null}
                                </View>

                            )
                        })}

                    </View>
                </ScrollView>
                <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }} >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles(selectedTheme).drawercontainer} />

                    </TouchableWithoutFeedback>


                    <View style={styles(selectedTheme).Modalview}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={icons.Icon.cross} style={styles(selectedTheme).modalicon} />
                            <Text style={styles(selectedTheme).modaltext}>{buttons.Cancel}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => openCamara()}>

                            <Image source={icons.Icon.camera} style={styles(selectedTheme).modalicon} />
                            <Text style={styles(selectedTheme).modaltext}>{buttons.Camera}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => launchLibrary()} >
                            <Image source={icons.Icon.camera} style={styles(selectedTheme).modalicon} />
                            <Text style={styles(selectedTheme).modaltext}>{buttons.Gallery}</Text>
                        </TouchableOpacity>


                    </View>

                </Modal>
            </View>
        </View>
    )
}

export default ProfileScreen