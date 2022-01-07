import React from "react";

import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { icon} from "../../config";
import RanderListItem from "./RanderListItem";
import styles from "./style";
import SettingData from '../../config/SettingData'

interface Settingprops {
    navigation: any
}





const Setting = (props: Settingprops) => {
    const { navigation } = props

   
    return (
        <View style={styles.mainContainer}>


                    <View style={styles.container}>
                        <View style={styles.subcontainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <View style={styles.leftimagecontainer}>
                                    <Image source={icon.left_arrow} style={styles.leftimage} />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.HeaderText}>SETTINGS</Text>
                            <View style={styles.HeaderRight}/>                          
                        </View>
                    </View>
            <View style={styles.flatlistcontainer}>

            <FlatList
                    nestedScrollEnabled ={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={SettingData}
                    initialScrollIndex={0}
                 //  ItemSeparatorComponent={ItemSeprator}
                    renderItem={({ item ,index }) => <RanderListItem  item={item} index={0} navigation={navigation}/> }
                    keyExtractor={(_,index )=> index.toString()}
                />

            </View>






        </View>
    )
}

export default Setting