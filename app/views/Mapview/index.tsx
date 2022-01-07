import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { Constant, FONTS, icon } from "../../config";
import styles from "./style";
interface MapViewModelprops {
    navigation: any
}
const MapViewScreen = (props: MapViewModelprops) => {
    const { navigation } = props
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            

            <View style={styles.modalView}>
                <View style={styles.buttondata}>
                    <Image source={icon.clock} style={styles.image1} />
                    <View>
                        <Text style={FONTS.h5}>Your delivery Time</Text>
                        <Text style={FONTS.h3}>8 minutes</Text>
                    </View>
                </View>
                <View style={styles.buttondata}>
                    <Image source={icon.loacation} style={styles.image1} />
                    <View>
                        <Text style={FONTS.h5}>Your address</Text>
                        <Text style={FONTS.h3}>Sector 2 Noids,UP</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setModalVisible(false) }}

                >
                    <View style={styles.buttondata}>
                        <Image source={icon.user_avatar} style={styles.image} />
                        <View>
                            <Text style={styles.text}>rahul</Text>
                            <Text style={styles.text}>delivery man</Text>
                        </View>
                    </View>

                    <Image source={icon.call} style={styles.image} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default MapViewScreen;