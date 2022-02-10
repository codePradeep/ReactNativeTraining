import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { buttons, dummyData, icons, images } from "../../config";
import constants from "../../config/constants/constants";
import Item from "./Flatlistranderitem";
import styles from "./style";

interface InstrctorProfileScreenprops {
    navigation: any
    visible: any
    setvisibe: any
    socialdata: any
    userdata: any
    studentreview: any
    // defaultitem: number
    // setdefaultitem: React.Dispatch<React.SetStateAction<number>>
}

const InstrctorProfileScreen = (props: InstrctorProfileScreenprops) => {
    const { navigation,
        visible,
        setvisibe,
        // defaultitem, setdefaultitem, 
        socialdata,
        userdata,
        studentreview
    } = props





    return (
        <View style={styles.mainconatiner}>
            <View style={styles.headContentcontainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.leftbutton}>
                        <Image source={icons.Icon.left_arrow} style={styles.headerlefticon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftbutton}>
                        <Image source={icons.Icon.share} style={styles.headerlefticon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.conatiner}>
                <View style={styles.ImageContainer}>
                    <Image source={images.images.profile} style={styles.profileicon} />
                    <View style={styles.imagecontainerView}>
                        <View style={styles.imageViewContainer}>
                            <Image source={icons.Icon.checked} style={styles.camericon} />
                        </View>
                    </View>
                </View>
                <View style={styles.userdatacontainer}>
                    <Text style={styles.username}>Pradeep Sharma</Text>
                    <Text style={styles.body}>Full Stack Developer</Text>
                    <TouchableOpacity style={styles.followbtn}>
                        <Text style={styles.followbtntext}>+ {buttons.Follow}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        {socialdata.map

                        }

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.flexDirectionrow}>
                        {
                            dummyData.userSosialData.map((item, index) => {
                                return (
                                    <View style={styles.socialcontainer}>
                                        <Text>{item.value}</Text>
                                        <Text>{item.label}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                    <View>
                    <Text style={styles.thirdcontainertexttitle} >About Me</Text>
                    <Text>Hi everyone this is pradeep sharma i'm a react native lerner and now I'm working on a Demo project for the practice</Text>
                    </View>











                    <View>
                        <View style={styles.Itemcontainer}>
                            <Text style={styles.thirdcontainertexttitle} >MY Courses (4)</Text>
                            <TouchableOpacity style={styles.SeeAllbutton}>
                                <Text style={styles.seeAlltext}>See All</Text>
                            </TouchableOpacity>

                        </View>
                        <FlatList

                            data={dummyData.courses_list_2}
                            extraData={dummyData.courses_list_2}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => item + index.toString()}
                            renderItem={({ item }) => <Item item={item} />}

                        />
                    </View>
                    {/* <View>
                        <View style={styles.Itemcontainer}>
                            <Text style={styles.thirdcontainertexttitle} >Student Rating</Text>
                        </View>
                        <View>

                        </View>
                    </View> */}
                    <View>
                        <View style={styles.Itemcontainer}>
                            <Text style={styles.thirdcontainertexttitle} >Student Review</Text>
                            <TouchableOpacity style={styles.SeeAllbutton}>
                                <Text style={styles.seeAlltext}>See All</Text>
                            </TouchableOpacity>

                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.flexDirectionrow}>
                                {dummyData.studentreview.map((item, index) => {
                                    return (
                                        <View style={styles.reviewcontainer}>
                                            <Image source={item.profile} style={styles.Icons} />
                                            <View style={styles.itemtextcontainer}>
                                                <Text style={styles.studentname}>{item.name}</Text>
                                                <Text style={styles.comment}>{item.comment}</Text>
                                                <Text style={styles.postedon}>{item.posted_on}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={styles.Itemcontainer}>
                            <Text style={styles.thirdcontainertexttitle} >Connect Here</Text>
                        </View>

                        <TouchableOpacity style={styles.socialbtn}>

                            <View style={styles.flexDirectionrow}>
                                <Image source={icons.Icon.twitter} style={styles.socialbtnIcon} />
                                <Text style={styles.socialbtnText}>{buttons.twitter}</Text>
                            </View>
                            <Image source={icons.Icon.right_arrow} style={styles.smallicon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialbtn}>

                            <View style={styles.flexDirectionrow}>
                                <Image source={icons.Icon.linkedin} style={styles.socialbtnIcon} />
                                <Text style={styles.socialbtnText}>{buttons.linkdin}</Text>
                            </View>
                            <Image source={icons.Icon.right_arrow} style={styles.smallicon} />
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        </View>
    )
}


export default InstrctorProfileScreen
