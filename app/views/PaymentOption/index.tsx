import React from "react";
import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import { Screens, Icon, COLORS, ScreenConstent, buttons } from "../../config";
import styles from "./style";

interface PaymentOptionsScreenprops {
    navigation: any
    selected: number
    setselected: React.Dispatch<React.SetStateAction<number>>
    buttonsdata: {
        icon: any;
        label: string;
    }[]
    isEnabled: boolean
    setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>
    toggleSwitch: () => void
}
const PaymentOptionsScreen = (props: PaymentOptionsScreenprops) => {
    const {
        navigation,
        selected,
        setselected,
        buttonsdata,
        isEnabled,
        setIsEnabled,
        toggleSwitch
    } = props

    return (
        <View style={styles.MainContainer}>
            <View style={{flex:.25}}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={Icon.close} style={styles.icons} />
                </TouchableOpacity>
                <View style={styles.Header}>
                    <Text style={styles.H1}>{ScreenConstent.PaymentOPtions.Paymentopt}</Text>
                </View>
                <View style={styles.topbuttoncontainer}>
                    {buttonsdata.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}
                                style={[styles.button, { backgroundColor: selected == index ? COLORS.black : COLORS.graybackground }]}
                                onPress={() => setselected(index)}>
                                <Image source={item.icon} style={[styles.icons, { tintColor: selected == index ? COLORS.white : COLORS.black }]} />
                                <Text style={[styles.buttontext, { color: selected == index ? COLORS.white : COLORS.black }]}>{item.label}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.heading}>{ScreenConstent.PaymentOPtions.ubercash}</Text>
                <View style={styles.boxcontainer}>
                    <View>
                        <Text style={styles.P1}>{ScreenConstent.PaymentOPtions.ubercash}</Text>
                        <Text style={styles.P1}>$0.00</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "rgba(1,1,1,.8)", true: "rgba(1,1,1,.5)" }}
                        thumbColor={isEnabled ? COLORS.black : "#c0c0c0"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text  style={styles.heading}>{ScreenConstent.PaymentOPtions.paymentMethod}</Text>
                <View style={styles.boxcontainer}>
                    <TouchableOpacity>
                        <Text style={styles.P1}>Cash</Text>
                    </TouchableOpacity>
                    <Image source={Icon.down} style={styles.smallIcon} />
                </View>
                <TouchableOpacity style={{ marginBottom: 20 }}>
                    <Text style={styles.P3}>{buttons.AddPayementmethod}</Text>
                </TouchableOpacity >

                <Text  style={styles.heading}>{ScreenConstent.PaymentOPtions.Voucher}</Text>
                <TouchableOpacity style={{ marginVertical: 10 }}>
                    <Text style={styles.P3}>{buttons.AddVoucherCode}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PaymentOptionsScreen

