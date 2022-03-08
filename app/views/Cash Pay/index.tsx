import React from "react";
import { Text, View } from "react-native";
import { Abutton, Header } from "../../common";
import { buttons } from "../../config";
import styles from "./style";

interface CashPayprops {
    navigation: any
}
const CashPay = (props: CashPayprops) => {
    const { navigation } = props

    return (
        <View style={styles.MainContainer}>
            <Header Title="Cash" />
            <View style={styles.ViewContainer}>
                <View>
                <Text style={styles.text}>You haven't taken a trip yet</Text>
                <Text style={styles.subtext}>Your driver's phone will show you the ammount to pay at the end of the trip</Text>

                </View>
                <Abutton title={buttons.next} onPress={undefined} />

            </View>

        </View>
    )
}

export default CashPay

