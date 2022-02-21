
import React from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList } from "react-native";
import { dummyData, icons, images } from "../../config";
import Item from "./Flatlistranderitem";

import Renderitem from "./Renderitem";
import styles from "./style";

interface Homepageprops {
    navigation: any


}

const Homepage = (props: Homepageprops) => {
    const { navigation } = props
    return (
        <View style={styles.Container} >
            <View style={styles.headercontainer}>
                <View>
                    <Text style={styles.Text}>Hello, Pradeep Kumar Sharma</Text>
                    <Text style={styles.SubText}>Thursday ,3 Feb 2022</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("NotificationTab")}>
                    <Image source={icons.Icon.notification} style={styles.notifiactionicon} />
                </TouchableOpacity>

            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.mainScrollView}>

                <ImageBackground source={images.images.bg_1} imageStyle={styles.Image} style={styles.SubContainer}>
                    <Text style={styles.howto}>How To</Text>
                    <Text style={styles.subtextdata}>Make your brand more visible with our checklist</Text>
                    <Text style={styles.auther}>by Pradeep</Text>
                    <Image source={images.images.start_learning} />
                    <TouchableOpacity style={styles.learnbutton} 
                    onPress={()=>navigation.navigate("CourseModel")}>
                        <Text style={styles.learnbuttontext}>Start Learning</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.thirdrdcontainer} >
                    {dummyData.courses_list_1.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <Image source={item.thumbnail} style={styles.thumbnail} />
                                <View style={styles.row}>
                                    <Image source={icons.Icon.play_1} style={styles.playicon} />
                                    <View>
                                        <Text style={styles.thirdcontainertexttitle} >{item.title}</Text>
                                        <View style={styles.row}>
                                            <Image source={icons.Icon.time} style={styles.smallicon} />
                                            <Text style={styles.time} > {item.duration}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                </ScrollView>

                <View style={styles.seaperater} />

                <View style={styles.Itemcontainer}>
                    <Text style={styles.thirdcontainertexttitle} >Categories</Text>
                    <TouchableOpacity style={styles.SeeAllbutton}>
                        <Text style={styles.seeAlltext}>See All</Text>
                    </TouchableOpacity>

                </View>


                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.categories}
                    extraData={dummyData.categories}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <Renderitem item={item} index={index} />}
                    keyExtractor={(_, index) => index.toString()}
                />


<View style={styles.seaperater} />

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









            </ScrollView>

        </View>
    )
}
export default Homepage;