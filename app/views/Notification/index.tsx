import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity } from "react-native";
import { icons, images, selectedTheme } from "../../config";
import Item from "./Renderitem";
import styles from "./style";



interface NotificationTabprops {
    navigation: any
    DATA:{
        title: string;
        data: {
            id: number;
            avatar: any;
            name: string;
            created_at: string;
            message: string;
        }[];
    }[]
}

const NotificationTab = (props: NotificationTabprops) => {
    const { DATA, navigation } = props
    return (
        <View style={styles(selectedTheme).mainconatiner}>
             <Image source={selectedTheme.name=="light"?images.images.bg: images.images.bg_dark} style={styles(selectedTheme).bgimage} />
        <View style={styles(selectedTheme).conatiner}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
                style={styles(selectedTheme).leftbutton}
            >
                <Image source={icons.Icon.back} style={styles(selectedTheme).headerlefticon} />
            </TouchableOpacity>
            <Text style={styles(selectedTheme).HeaderText}>Notifications</Text>


            
                <SectionList
                    sections={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles(selectedTheme).header}>{title}</Text>
                    )}
                />
           
        </View>
        </View>
    );
}
export default NotificationTab;