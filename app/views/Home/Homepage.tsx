
import React from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList } from "react-native";
import { buttons, icons, images, Screensdata, selectedTheme } from "../../config";
import Item from "./Flatlistranderitem";
import styles from "./style";

interface Homepageprops {
    navigation: any
    courselist1: {
        id: number;
        title: string;
        duration: string;
        thumbnail: any;
    }[]
    category: {
        id: number;
        title: string;
        thumbnail: any;
        icon: any;
    }[]
    courselist2: {
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
    setseeall:any
    isfavourite:any
    setisfavourite:any

}

const Homepage = (props: Homepageprops) => {
    const { navigation,
        courselist1,
        courselist2,
        category,
        setseeall,
        isfavourite,
        setisfavourite
    } = props
    return (
        <View style={styles(selectedTheme).Container} >
            <View style={styles(selectedTheme).MainSubContainer}>
                <View style={styles(selectedTheme).headercontainer}>
                    <View>
                        <Text style={styles(selectedTheme).Text}>{Screensdata.Home.greeting}</Text>
                        <Text style={styles(selectedTheme).SubText}>{Screensdata.Home.date}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("NotificationTab")}>

                        <Image source={icons.Icon.notification} style={styles(selectedTheme).notifiactionicon} />
                    </TouchableOpacity>

                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={styles(selectedTheme).mainScrollView}>

                    <ImageBackground source={images.images.bg_1} imageStyle={styles(selectedTheme).Image} style={styles(selectedTheme).SubContainer}>
                        <Text style={styles(selectedTheme).howto}>{Screensdata.Home.head1}</Text>
                        <Text style={styles(selectedTheme).subtextdata}>{Screensdata.Home.head2}</Text>
                        <Text style={styles(selectedTheme).auther}>{Screensdata.Home.by}</Text>
                        <Image source={images.images.start_learning} />
                        <TouchableOpacity style={styles(selectedTheme).learnbutton}
                            onPress={() => navigation.navigate("CourseModel")}>
                            <Text style={styles(selectedTheme).learnbuttontext}>{Screensdata.Home.startlerning}</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles(selectedTheme).thirdrdcontainer} >
                        {courselist1.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}>
                                    <Image source={item.thumbnail} style={styles(selectedTheme).thumbnail} />
                                    <View style={styles(selectedTheme).row}>
                                        <Image source={icons.Icon.play_1} style={styles(selectedTheme).playicon} />
                                        <View>
                                            <Text style={styles(selectedTheme).thirdcontainertexttitle} >{item.title}</Text>
                                            <View style={styles(selectedTheme).row}>
                                                <Image source={icons.Icon.time} style={styles(selectedTheme).smallicon} />
                                                <Text style={styles(selectedTheme).time} > {item.duration}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}

                    </ScrollView>



                    <View style={styles(selectedTheme).Itemcontainer}>
                        <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Home.Categories}</Text>
                        <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}
                            onPress={() => navigation.navigate("CategoryModel")}>
                            <Text style={styles(selectedTheme).seeAlltext}>{buttons.SeeAll}</Text>
                        </TouchableOpacity>

                    </View>


                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                        {
                            category.map((item, index) => {
                                return (
                                    
                                        <TouchableOpacity key={index}
                                        onPress={() => navigation.navigate("CourseListingModel", {
                                            Header: item.title,
                                            Icon:item.icon
                                            
                                          })}
                                        style={[styles(selectedTheme).item,
                                        ]}>
                                    
                                        <ImageBackground source={item.thumbnail}
                                        imageStyle={styles(selectedTheme).itemIcons}
                                            style={[styles(selectedTheme).Icons]}
                                        >
                                            <Text style={[styles(selectedTheme).itemtext,
                                            ]}
                                            >{item.title}</Text>
                                        </ImageBackground>
                                       
                                    </TouchableOpacity>
                                    
                                )
                            })
                        }
                    </ScrollView>




                    <View style={styles(selectedTheme).Itemcontainer}>
                        <Text style={styles(selectedTheme).thirdcontainertexttitle} >{Screensdata.Home.PopulerCourses}</Text>
                        <TouchableOpacity style={styles(selectedTheme).SeeAllbutton}
                            onPress={() => setseeall(true)}>
                            <Text style={styles(selectedTheme).seeAlltext}>{buttons.SeeAll}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView >
                        {
                            courselist2.map((item, index) => {
                                return (
                                    <Item 
                                    key={index} 
                                    item={item} 
                                    isfavourite={isfavourite}
                                    setisfavourite={setisfavourite}
                                    />
                                )
                            })
                        }
                    </ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}
export default Homepage;