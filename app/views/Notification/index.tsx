import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../config";
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
        <View style={styles.mainconatiner}>
             <Image source={images.images.bg_dark} style={styles.bgimage} />
        <View style={styles.conatiner}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
                style={styles.leftbutton}
            >
                <Image source={icons.Icon.back} style={styles.headerlefticon} />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Notifications</Text>


            
                <SectionList
                    sections={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
           
        </View>
        </View>
    );
}
export default NotificationTab;