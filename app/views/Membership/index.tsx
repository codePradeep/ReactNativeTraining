import React, { memo } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, icons, Screensdata, selectedTheme } from "../../config";
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
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).headContentcontainer}>
                <View style={styles(selectedTheme).header}>
                    <TouchableOpacity style={styles(selectedTheme).leftbutton}
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.Icon.left_arrow} style={styles(selectedTheme).headerlefticon} />
                    </TouchableOpacity>
                    <Text style={styles(selectedTheme).headertext}>{Screensdata.Membership.name}</Text>
                    <Text></Text>
                </View>
                <Text style={styles(selectedTheme).text}>{Screensdata.Membership.header}</Text>
            </View>

            <View style={styles(selectedTheme).conatiner}>

                <Text style={[styles(selectedTheme).itembigtext]}
                >{Screensdata.Membership.data}</Text>

                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <FlatList
                        data={constants.Membership}
                        showsVerticalScrollIndicator={false}
                        extraData={constants.Membership}
                        renderItem={({ item, index }) => <Renderitem item={item} index={index} defaultitem={defaultitem} setdefaultitem={setdefaultitem} />}
                        numColumns={2}
                        keyExtractor={(_, index) => index.toString()}
                    />


                    <TouchableOpacity style={styles(selectedTheme).button}
                        onPress={() => navigation.navigate("Roottab")}>
                        <Text style={styles(selectedTheme).buttontext}>{buttons.startfreetrail} </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


export default memo(Membership)
