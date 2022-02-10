import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";
import { Slider } from "../../common";
import { buttons, COLORS, icons, images, Screensdata, selectedTheme } from "../../config";
import { Item, Renderitem } from "./Renderitem";
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
    flatlistdata:any
}

const CorselChapter = (props: Corselistingprops) => {
    const { DATA,navigation,flatlistdata} = props
    return (
        <View style={styles.mainconatiner}>
            <View style={styles.conatiner}>
            <View style={styles.headercontainer}>
                <Text style={styles.usertitle}>{DATA.title}</Text>
                <View style={styles.studentdata}>
                    <Text style={styles.Smalltext}>{DATA.number_of_students}</Text>
                    <Text style={styles.Smalltext}>{DATA.duration}</Text>
                </View>
            </View>
            <View style={styles.profileconatiner}>
                <View style={styles.subprofileconatiner}>
                    <Image source={images.images.profile} style={styles.profileicon}/>
                    <View>
                        <Text>{DATA.instructor.name}</Text>
                        <Text>{DATA.instructor.title}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.SeeAllbutton}>
                  <Text style={styles.seeAlltext}>{buttons.Follow}+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.seperater}/>

            <View>
                {DATA.videos.map((item,index)=>{
                    return(
                        <View key={index} style={styles.videocontainer}>
                            <View style={styles.subvideocontainer}>
                            <Image source={icons.Icon.checked} style={styles.videoIcon}/>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text>{item.duration}</Text>
                            </View>
                            </View>
                            <View style={styles.buttoncontainer}>
                                <Text>{item.size}</Text>
                                <TouchableOpacity>
                                    <Image source={icons.Icon.download} style={styles.downloadIcon}/>
                                </TouchableOpacity>

                            </View>

            
                        </View>
                    )
                })}

            </View>

            <View style={styles.seperater}/>

            
            <View style={styles.Itemcontainer}>
                            <Text style={styles.thirdcontainertexttitle} >Student Review</Text>
                            <TouchableOpacity style={styles.SeeAllbutton}>
                                <Text style={styles.seeAlltext}>See All</Text>
                            </TouchableOpacity>

                        </View>
                <FlatList
                    data={flatlistdata}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                />
            </View>

          
        </View>
    );
}
export default CorselChapter;