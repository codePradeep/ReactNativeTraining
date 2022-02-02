import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image, TouchableOpacity, FlatList } from "react-native";
import { icons, images } from "../../config";
import Item from "./Renderitem";
import styles from "./style";



interface Corselistingprops {
    navigation: any
    DATA: {
        id: number;
        title: string;
        duration: string;
        instructor: string;
        ratings: number;
        price: number;
        is_favourite: boolean;
        thumbnail: any;
    }[]
}

const Corselisting = (props: Corselistingprops) => {
    const { DATA, navigation } = props
    return (
        <View style={styles.mainconatiner}>
            <View style={styles.headercontainer}>
             <Image source={images.images.bg_1} style={styles.bgimage} />
             <TouchableOpacity
                style={styles.leftbutton}
            >
                <Image source={icons.Icon.back} style={styles.headerlefticon} />
            </TouchableOpacity>
            <View style={styles.headersub}>
            <Text style={styles.HeaderText}>Mobile Design</Text>
            <Image source={icons.Icon.mobile} style={styles.mobileimage} />
            </View>
            </View>
        <View style={styles.conatiner}>
            
            <View style={styles.secContainer}>
                <Text style={styles.filterbuttontext}>5.761 Results</Text>
                <TouchableOpacity style={styles.filterbutton}>
                <Image source={icons.Icon.filter} style={styles.filtericons}/>
                </TouchableOpacity>
            </View>


            
                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({ item }) => <Item item={item} />}
                  
                />
           
        </View>
        </View>
    );
}
export default Corselisting;