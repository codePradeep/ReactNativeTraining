import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { COLORS, Constant, icon, Screen } from "../../config";
import Item from "./renderItem";
import styles from "./style";



interface NotificationTabprops {
    navigation: any
    YesterdayData: {
        title: string;
        time: string;
        subtitle: string;
        image: any;
        day: string;
    }[]
    TodayData: {
        title: string;
        time: string;
        subtitle: string;
        image: any;
        day: string;
    }[]
    Profilepic:any

}

const NotificationTab = (props: NotificationTabprops) => {
    const { TodayData,YesterdayData, navigation,Profilepic } = props
    return (
        <SafeAreaView style={styles.maincontainer}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.menu} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>{Constant.screens.notificationTab}</Text>
                    <TouchableOpacity style={styles.HeaderRight}
                        onPress={()=>navigation.navigate(Screen.MyAccountModel)}
                        >
                            <Image source={{ uri: Profilepic }} style={styles.headerRightimage} />
                        </TouchableOpacity>
                </View>
            </View>
            
            <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false} >
                
                <Text style={styles.header}>{Constant.Notificationscreen.Today}</Text>
              
                {TodayData.map((item: any, key: any) => {
                    return(
                        <Item item={item} key={key} />
                    )
                })}
                 <Text style={styles.header}>{Constant.Notificationscreen.Yesterday}</Text>
                {YesterdayData.map((item: any, key: any) => {
                    return (
                        <Item item={item} key={key} />
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
export default NotificationTab;