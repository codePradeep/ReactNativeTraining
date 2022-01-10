import React from "react";
import { FlatList, Image, SectionList, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../common";
import { Constant, icon } from "../../config";
import CouponData from "../../config/Coupondata";
import RanderListItem from "./RanderListItem";
import styles from "./style";

interface Onboardingprops {
    navigation: any
    HistoryDATA:any
        UpcomingDATA:any
        toggle:any
        settogle:any
}

const MyOrder = (props: Onboardingprops) => {

    const { navigation,HistoryDATA,UpcomingDATA,toggle,settogle } = props
    
   
   
    return (
        <View style={styles.maincontainer}>

            <View style={styles.headercontainer}>
                <Header headertitle={Constant.screens.myorder} navigation={navigation} HeaderRightComponent={undefined} />
            </View>

            <View style={styles.FirstView} >
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={toggle?styles.clickedbutton:styles.notclickedbutton}
                    onPress={()=>settogle(true)} 
                    >
                        <Text style={toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>{Constant.Button.History}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={toggle?styles.notclickedbutton:styles.clickedbutton}
                      onPress={()=>settogle(false)} 
                    >
                        <Text style={!toggle?styles.clickedbuttontext:styles.notclickedbuttontext}>{Constant.Button.Upcoming}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.flatlistcontainer}>

                
<SectionList
                    sections={toggle?HistoryDATA:UpcomingDATA}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <RanderListItem item={item} index={0} navigation={navigation} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />

            </View>

        </View>

    )
}
export default MyOrder
