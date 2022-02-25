import React, { useState } from "react";
import { ActivityIndicator, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS, constants, icons, images, selectedTheme } from "../../config";
import CorselChapter from "../Course Chapter";
import CourseDiscussion from "../Course Discussion";
import CourseFiles from "../Course Files";
import styles from "./style";
import Video from 'react-native-video';


interface coursescreenprops {
    navigation: any
    DATA: any
}


const CourseScreen = (props: coursescreenprops) => {
    const { navigation, DATA } = props
    const [defaultitem, setdefaultitem] = useState(0)
    const [playvideo, setplayvideo] = useState(true)

    const Page = () => {

        switch (defaultitem) {
            case 0:
                return <CorselChapter navigation={navigation} flatlistdata={DATA.courses_list_2} DATA={DATA.course_details} />
            case 2:
                return <CourseDiscussion
                    navigation={navigation}
                    Data={DATA.course_details.discussions}
                />
            case 1:
                return <CourseFiles navigation={navigation} />

        }

    }

    return (
        <View style={styles(selectedTheme).mainconatiner}>

            <View style={styles(selectedTheme).VideoConatiner}>
                {playvideo ?
                    <ImageBackground source={images.images.thumbnail_1} style={styles(selectedTheme).imagebackgraound}>

                        <View style={styles(selectedTheme).headercontainer}>
                            <TouchableOpacity style={styles(selectedTheme).iconback}
                                onPress={() => navigation.goBack()}
                            >
                                <Image source={icons.Icon.back} style={styles(selectedTheme).icons} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity >
                                    <Image source={icons.Icon.media} style={styles(selectedTheme).secendicons} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={icons.Icon.heart_off} style={styles(selectedTheme).secendicons} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles(selectedTheme).container}>
                            <TouchableOpacity style={styles(selectedTheme).playbutton}

                                onPress={() => setplayvideo(false)}>
                                <Image source={icons.Icon.play} style={styles(selectedTheme).icons} />
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>

                    : <View style={{ flex: 1 }} >
                        <View style={[styles(selectedTheme).headercontainer, { backgroundColor: "black" }]}>
                            <TouchableOpacity style={styles(selectedTheme).iconback}
                                onPress={() => navigation.goBack()}
                            >
                                <Image source={icons.Icon.back} style={styles(selectedTheme).icons} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity >
                                    <Image source={icons.Icon.media} style={styles(selectedTheme).secendicons} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={icons.Icon.heart_off} style={styles(selectedTheme).secendicons} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <Video
                            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                            controls={true}
                            onBuffer={() => { return (<ActivityIndicator />) }}
                            style={{
                                position: "absolute",
                                top: 50,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                backgroundColor: COLORS.black
                            }}



                        />

                    </View>}



            </View>
            <View style={styles(selectedTheme).ButtonContainer}>
                {
                    constants.course_details_tabs.map((item, index) => {
                        return (

                            <TouchableOpacity
                                key={index}
                                onPress={() => setdefaultitem(item.id)}
                                style={[styles(selectedTheme).button, {
                                    backgroundColor: defaultitem == item.id ? selectedTheme.backgroundgray10Ngray70 : selectedTheme.backgroundwhite3Ngray8,
                                    borderColor: defaultitem == item.id ? COLORS.primary : selectedTheme.backgroundwhite3Ngray8
                                }]}>
                                <Text style={styles(selectedTheme).btnText}>{item.label}</Text>
                            </TouchableOpacity>

                        )
                    })
                }
            </View>
            <ScrollView horizontal={false} style={{ flex: 1, }} >

                {Page()}
            </ScrollView>



        </View>
    )
}

export default CourseScreen