import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";

import { buttons, COLORS, icons, images, Screensdata, selectedTheme } from "../../config";
import Item from "../Home/Flatlistranderitem";
import { Renderitem } from "./Renderitem";
import styles from "./style";



interface Corselistingprops {
    navigation: any
    DATA: {
        id: number;
        title: string;
        number_of_students: string;
        duration: string;
        instructor: {
            name: string;
            title: string;
        };
        videos: {
            title: string;
            duration: string;
            size: string;
            progress: string;
            is_playing: boolean;
            is_complete: boolean;
            is_lock: boolean;
            is_downloaded: boolean;
        }[];
        students: {

        }[];
        files: {

        }[];
        discussions: {

        }[];
    }
    flatlistdata: {
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
    Title:any
    isfavourite:any
    setisfavourite:any
}

const CorselChapter = (props: Corselistingprops) => {
    const { DATA, navigation, flatlistdata,Title,isfavourite, setisfavourite } = props
    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).conatiner}>
                <View style={styles(selectedTheme).headercontainer}>
                    <Text style={styles(selectedTheme).usertitle}>{Title}</Text>
                    <View style={styles(selectedTheme).studentdata}>
                        <Text style={styles(selectedTheme).Smalltext}>{DATA.number_of_students}</Text>
                        <Text style={styles(selectedTheme).Smalltext}>{DATA.duration}</Text>
                    </View>
                </View>
                <View style={styles(selectedTheme).profileconatiner}>
                    <View style={styles(selectedTheme).subprofileconatiner}>
                        <Image source={images.images.profile} style={styles(selectedTheme).profileicon} />
                        <View>
                            <Text>{DATA.instructor.name}</Text>
                            <Text>{DATA.instructor.title}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}
                        onPress={() => navigation.navigate("InstructorProfileModel")}>
                        <Text style={styles(selectedTheme).seeAlltext}>{buttons.Follow}+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles(selectedTheme).seperater} />

                <View>
                    {DATA.videos.map((item, index) => {
                        return (
                            <View key={index} style={styles(selectedTheme).videocontainer}>
                                <View style={styles(selectedTheme).subvideocontainer}>
                                    <View style={styles(selectedTheme).playbutton}>
                                        <Image source={icons.Icon.play} style={styles(selectedTheme).videoIcon} />
                                    </View>
                                    <View>
                                        <Text style={styles(selectedTheme).title}>{item.title}</Text>
                                        <Text>{item.duration}</Text>
                                    </View>
                                </View>
                                <View style={styles(selectedTheme).buttoncontainer}>
                                    <Text>{item.size}</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.Icon.download} style={styles(selectedTheme).downloadIcon} />
                                    </TouchableOpacity>

                                </View>


                            </View>
                        )
                    })}

                </View>

                <View style={styles(selectedTheme).seperater} />


                <View style={styles(selectedTheme).Itemcontainer}>
                    <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Home.PopulerCourses}</Text>
                    <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}>
                        <Text style={styles(selectedTheme).seeAlltext}>{buttons.SeeAll}</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView >
                    {
                        flatlistdata.map((item, index) => {
                            return (
                                <Item key={index} navigation={navigation} item={item} isfavourite={isfavourite} setisfavourite={setisfavourite} />
                            )
                        })
                    }
                </ScrollView>
            </View>


        </View>
    );
}
export default CorselChapter;