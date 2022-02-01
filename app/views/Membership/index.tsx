import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, icons } from "../../config";
import constants from "../../config/constants/constants";
import Renderitem from "./Renderitem";
import styles from "./style";

interface CategoryProps {
    navigation: any
    visible: any
    setvisibe: any
    defaultitem: number
    setdefaultitem: React.Dispatch<React.SetStateAction<number>>
}

const Membership = (props: CategoryProps) => {
    const { navigation, visible, setvisibe, defaultitem, setdefaultitem, } = props





    return (
        <View style={styles.mainconatiner}>
          <View style={styles.headContentcontainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftbutton}>
                    <Image source={icons.Icon.left_arrow} style={styles.headerlefticon} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Membership</Text>
                <Text></Text>
            </View>
            <Text  style={styles.text}>Unlimited Study Anytime,Anywhere</Text>
            </View>

            <View style={styles.conatiner}>

            <Text style={[styles.itembigtext]}
      >Choose A Plan</Text>

                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <FlatList
                        data={constants.Membership}
                        extraData={constants.Membership}
                        renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                        numColumns={2}
                        keyExtractor={(_, index) => index.toString()}
                    />


                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>{buttons.startfreetrail} </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


export default Membership
