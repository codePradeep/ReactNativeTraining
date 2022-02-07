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
    // defaultitem: number
    // setdefaultitem: React.Dispatch<React.SetStateAction<number>>
}

const InstrctorProfileScreen = (props: InstrctorProfileScreenprops) => {
    const { navigation,
        visible,
        setvisibe,
        // defaultitem, setdefaultitem, 
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
                </View>
                <ScrollView>
                <View>
                    <View style={styles.Itemcontainer}>
                        <Text style={styles.thirdcontainertexttitle} >Populer Courses</Text>
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
                <View>
                    <View style={styles.Itemcontainer}>
                        <Text style={styles.thirdcontainertexttitle} >Student Rating</Text>
                    </View>
                    <View>
                       {/* social button */}
                    </View>
                </View>
                <View>
                    <View style={styles.Itemcontainer}>
                        <Text style={styles.thirdcontainertexttitle} >Student Review</Text>
                        <TouchableOpacity style={styles.SeeAllbutton}>
                            <Text style={styles.seeAlltext}>See All</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                       {/* student review */}
                    </View>
                </View>
                <View>
                    <View style={styles.Itemcontainer}>
                        <Text style={styles.thirdcontainertexttitle} >Connect Here</Text>
                    </View>
                    <View>
                       {/* social button */}
                    </View>
                </View>
 
                </ScrollView>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>{buttons.startfreetrail} </Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}


export default InstrctorProfileScreen
