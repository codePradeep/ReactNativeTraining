import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, icons } from "../../config";
import constants from "../../config/constants/constants";
import dummyData from "../../config/constants/dummyData";
import Renderitem from "./Renderitem";
import styles from "./style";

interface CategoryProps {
    navigation: any
    visible: any
    setvisibe: any
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
}

const CategoryScreen = (props: CategoryProps) => {
    const { navigation, visible, setvisibe,defaultitem,setdefaultitem, } = props





    return (
        <View style={styles.mainconatiner}>
            <View style={styles.conatiner}>
                <TouchableOpacity
                    style={styles.leftbutton}
                >
                    <Image source={icons.Icon.back} style={styles.headerlefticon} />
                </TouchableOpacity>
                <Text style={styles.text}>Choose Categories</Text>


          <View style={{flex:1,justifyContent:"space-between"}}>
                <FlatList
                    data={constants.categories}
                    extraData={constants.categories}
                    renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                    numColumns={3}
                    keyExtractor={(_, index) => index.toString()}
                />


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>{buttons.CONTINUE} </Text>
                </TouchableOpacity>
         </View>

            </View>
        </View>
    )
}


export default CategoryScreen
