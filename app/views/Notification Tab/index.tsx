import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity } from "react-native";
import { COLORS, Constant, icon } from "../../config";
import Item from "./renderItem";
import styles from "./style";



interface NotificationTabprops {
    navigation: any
    DATA: {
        title: string;
        data: {
            title: string;
            time: string;
            subtitle: string;
            image: any;
        }[];
    }[]
}

const NotificationTab = (props: NotificationTabprops) => {
    const { DATA, navigation } = props
    return (
        <SafeAreaView style={styles.maincontainer}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingModel")} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.menu} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>{Constant.screens.notificationTab}</Text>
                    <View style={styles.HeaderRight} >
                        <Image source={icon.user_avatar} style={styles.headerRightimage} />

                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
export default NotificationTab;