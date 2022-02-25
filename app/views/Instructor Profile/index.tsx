import React from "react";
import { FlatList, Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { screensEnabled } from "react-native-screens";
import { CircularProgress, MultiProgressBar } from "../../common";
import { buttons, COLORS, icons, images, Screensdata, selectedTheme } from "../../config";
import dummyData from "../../config/constants/dummyData";
import Item from "./Flatlistranderitem";
import styles from "./style";

interface InstrctorProfileScreenprops {
    navigation: any
    visible: any
    setvisibe: any
    socialdata: {
        value: string;
        label: string;
    }[]
    userdata: any
    studentreview: {
        id: number;
        profile: any;
        name: string;
        posted_on: string;
        comment: string;
    }[]
    data: {
        id: number;
        title: string;
        clsss_level: string;
        creted_on: string;
        duration: number;
        instructor: string;
        ratings: number;
        price: number;
        is_favourite: boolean;
        thumbnail: any;
    }[]
    socialConnection: {
        id: number;
        name: string;
        icon: any;
        Link: string;
    }[]
}

const InstrctorProfileScreen = (props: InstrctorProfileScreenprops) => {
    const { navigation,
        visible,
        setvisibe,
        socialdata,
        userdata,
        studentreview,
        data,
        socialConnection,
    } = props





    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).headContentcontainer}>
                <View style={styles(selectedTheme).header}>
                    <TouchableOpacity style={styles(selectedTheme).leftbutton}
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.Icon.left_arrow} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles(selectedTheme).leftbutton}>
                        <Image source={icons.Icon.share} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles(selectedTheme).conatiner}>
                <View style={styles(selectedTheme).ImageContainer}>
                    <Image source={images.images.profile} style={styles(selectedTheme).profileicon} />
                    <View style={styles(selectedTheme).imagecontainerView}>
                        <View style={styles(selectedTheme).imageViewContainer}>
                            <Image source={icons.Icon.checked} style={styles(selectedTheme).camericon} />
                        </View>
                    </View>
                </View>
                <View style={styles(selectedTheme).userdatacontainer}>
                    <Text style={styles(selectedTheme).username}>{Screensdata.Instructor.name}</Text>
                    <Text style={styles(selectedTheme).body}>{Screensdata.Instructor.des}</Text>
                    <TouchableOpacity style={styles(selectedTheme).followbtn}>
                        <Text style={styles(selectedTheme).followbtntext}>+ {buttons.Follow}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles(selectedTheme).flexDirectionrow}>
                        {
                            socialdata.map((item, index) => {
                                return (
                                    <View key={index} style={styles(selectedTheme).socialcontainer}>
                                        <Text>{item.value}</Text>
                                        <Text>{item.label}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                    <View>
                        <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Instructor.AboutMe}</Text>
                        <Text style={styles(selectedTheme).time}>{Screensdata.Instructor.bio}</Text>
                    </View>

                    <View>
                        <View style={styles(selectedTheme).Itemcontainer}>
                            <Text style={styles(selectedTheme).thirdcontainertexttitle} >MY Courses (4)</Text>
                            <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}>
                                <Text style={styles(selectedTheme).seeAlltext}>{buttons.SeeAll}</Text>
                            </TouchableOpacity>

                        </View>

                        <ScrollView >
                            {
                                data.map((item, index) => {
                                    return (
                                        <Item key={index} item={item} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View>
                        <View style={styles(selectedTheme).Itemcontainer}>
                            <Text style={styles(selectedTheme).thirdcontainertexttitle} >Student Rating</Text>
                        </View>
                        <View>
                            <View style={styles(selectedTheme).StudentReviewcontainer}>
                                <CircularProgress percent={76} />
                                <Text style={styles(selectedTheme).studentreviewtext}>{Screensdata.Instructor.studentsatisfied}</Text>
                            </View>
                            <View style={styles(selectedTheme).progressContainer}>
                                <MultiProgressBar containerstyle={styles(selectedTheme).progressbar} />
                                {dummyData.studentrating.map((item, index) => {
                                    return (
                                        <View  key={index}   >
                                        <View style={styles(selectedTheme).progresSecendSubcontainer}>
                                            <View style={styles(selectedTheme).progresSubcontainer}>
                                                <Image source={item.icons} style={[styles(selectedTheme).progressicon,{tintColor:item.color}]} />
                                                <Text style={styles(selectedTheme).progressText}>{item.label}</Text>
                                            </View>
                                            <Text style={styles(selectedTheme).progressText}>{item.count}</Text>
                                            
                                        </View>
                                      {index<3?  <View style={styles(selectedTheme).seperater}/>:null}
                                        </View>
                                    )
                                })}

                            </View>

                        </View>
                    </View>
                    <View>
                        <View style={styles(selectedTheme).Itemcontainer}>
                            <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Instructor.StudentReview}</Text>
                            <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}>
                                <Text style={styles(selectedTheme).seeAlltext}>{buttons.SeeAll}</Text>
                            </TouchableOpacity>

                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles(selectedTheme).flexDirectionrow}>
                                {studentreview.map((item, index) => {
                                    return (
                                        <View key={index} style={styles(selectedTheme).reviewcontainer}>
                                            <Image source={item.profile} style={styles(selectedTheme).Icons} />
                                            <View style={styles(selectedTheme).itemtextcontainer}>
                                                <Text style={styles(selectedTheme).studentname}>{item.name}</Text>
                                                <Text style={styles(selectedTheme).comment}>{item.comment}</Text>
                                                <Text style={styles(selectedTheme).postedon}>{item.posted_on}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={styles(selectedTheme).Itemcontainer}>
                            <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Instructor.ConnectHere}</Text>
                        </View>
                        {socialConnection.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles(selectedTheme).socialbtn}
                                    onPress={() => Linking.openURL(item.Link)}
                                >
                                    <View style={styles(selectedTheme).flexDirectionrow}>
                                        <Image source={item.icon} style={styles(selectedTheme).socialbtnIcon} />
                                        <Text style={styles(selectedTheme).socialbtnText}>{item.name}</Text>
                                    </View>
                                    <Image source={icons.Icon.right_arrow} style={styles(selectedTheme).smallicon} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


export default InstrctorProfileScreen
