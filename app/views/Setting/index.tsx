import React from "react";

import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Constant, icon} from "../../config";
import RanderListItem from "./RanderListItem";
import styles from "./style";
import SettingData from '../../config/SettingData'
import { Header } from "../../common";

interface Settingprops {
    navigation: any
}





const Setting = (props: Settingprops) => {
    const { navigation } = props

   
    return (
        <View style={styles.mainContainer}>


                    <View style={styles.container}>
                        <Header headertitle={Constant.screens.SETTING} navigation={navigation} HeaderRightComponent={undefined} />
                    </View>
            <View style={styles.flatlistcontainer}>

            <FlatList
                    nestedScrollEnabled ={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={SettingData}
                    initialScrollIndex={0}
                    renderItem={({ item ,index }) => <RanderListItem  item={item} index={0} navigation={navigation}/> }
                    keyExtractor={(_,index )=> index.toString()}
                />

            </View>






        </View>
    )
}

export default Setting