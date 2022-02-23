import React from "react";
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import {  icons, selectedTheme } from "../../config";
import dummyData from "../../config/constants/dummyData";
import styles from "./style";

interface coursefilesprops {
    navigation: any

}

const CourseFiles = (props: coursefilesprops) => {
    const { navigation } = props
    return (
        <View style={styles(selectedTheme).Maincontainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View>
                    <Text style={styles(selectedTheme).Tilte}>Students</Text>
                    <View style={styles(selectedTheme).studentdatacontianer}>
                        {dummyData.course_details.students.map((item, index) => {
                            return (
                                <View  key={index}style={styles(selectedTheme).studentcontainer}>
                                    {item.id != 3 ? <Image source={item.thumbnail} style={styles(selectedTheme).studentIcon} />
                                        : <TouchableOpacity>
                                            <Text style={styles(selectedTheme).ViewAll}>View All</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
                        })}

                    </View>

                </View>
                <View>
                    <Text style={styles(selectedTheme).Tilte}>Files</Text>
                    <View style={styles(selectedTheme).filesdatacontianer}>
                        {dummyData.course_details.files.map((item, index) => {
                            return (
                                <View key ={index} style={styles(selectedTheme).Filescontainer}>
                                    <View style={styles(selectedTheme).imagecontainer}>
                                        <Image source={item.thumbnail} style={styles(selectedTheme).studentIcon} />
                                        <View style={styles(selectedTheme).textcontainer}>
                                            <Text style={styles(selectedTheme).title}>{item.name}</Text>
                                            <Text style={styles(selectedTheme).auther}>{item.author}</Text>
                                            <Text style={styles(selectedTheme).date}>{item.upload_date}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={icons.Icon.menu} style={styles(selectedTheme).menuicon} />
                                    </TouchableOpacity>

                                </View>
                            )
                        })}

                    </View>

                </View>




            </ScrollView>
        </View>
    )
}

export default CourseFiles