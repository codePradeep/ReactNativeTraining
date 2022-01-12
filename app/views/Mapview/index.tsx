import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { Constant, FONTS, icon } from "../../config";
import styles from "./style";
interface MapViewModelprops {
    navigation: any
    Data:{
        name: string;
        jD: string;
        DeliveryTime: string;
        address: string;
    }
}
const MapViewScreen = (props: MapViewModelprops) => {
    const { navigation ,Data} = props
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            

            <View style={styles.modalView}>
                <View style={styles.buttondata}>
                    <Image source={icon.clock} style={styles.image1} />
                    <View>
                        <Text style={FONTS.h5}>{Constant.mapview.YourdeliveryTime}</Text>
                        <Text style={FONTS.h3}>{Data.DeliveryTime}</Text>
                    </View>
                </View>
                <View style={styles.buttondata}>
                    <Image source={icon.loacation} style={styles.image1} />
                    <View>
                        <Text style={FONTS.h5}>{Constant.mapview.address}</Text>
                        <Text style={FONTS.h3}>{Data.address}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setModalVisible(false) }}

                >
                    <View style={styles.buttondata}>
                        <Image source={icon.user_avatar} style={styles.image} />
                        <View>
                            <Text style={styles.text}>{Data.name}</Text>
                            <Text style={styles.text}>{Data.jD}</Text>
                        </View>
                    </View>

                    <Image source={icon.call} style={styles.image} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default MapViewScreen;