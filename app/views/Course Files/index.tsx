import React from "react";
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { dummyData, icons } from "../../config";
import styles from "./style";

interface coursefilesprops {
    navigation: any

}

const CourseFiles = (props: coursefilesprops) => {
    const { navigation } = props
    return (
        <View style={styles.Maincontainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.Tilte}>Students</Text>
                    <View style={styles.studentdatacontianer}>
                        {dummyData.course_details.students.map((item, index) => {
                            return (
                                <View style={styles.studentcontainer}>
                                    {item.id != 3 ? <Image source={item.thumbnail} style={styles.studentIcon} />
                                        : <TouchableOpacity>
                                            <Text style={styles.ViewAll}>View All</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
                        })}

                    </View>

                </View>
                <View>
                    <Text style={styles.Tilte}>Files</Text>
                    <View style={styles.filesdatacontianer}>
                        {dummyData.course_details.files.map((item, index) => {
                            return (
                                <View style={styles.Filescontainer}>
                                    <View style={styles.imagecontainer}>
                                        <Image source={item.thumbnail} style={styles.studentIcon} />
                                        <View style={styles.textcontainer}>
                                            <Text style={styles.title}>{item.name}</Text>
                                            <Text style={styles.auther}>{item.author}</Text>
                                            <Text style={styles.date}>{item.upload_date}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={icons.Icon.menu} style={styles.menuicon} />
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