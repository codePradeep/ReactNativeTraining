import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, COLORS, Icon, ScreenConstent } from "../../config";

import Styles from "./style";

interface Walletprops {
    navigation: any
}
const Wallet = (props: Walletprops) => {
    const { navigation } = props

    return (
        <View style={Styles.MainContainer}>
            <TouchableOpacity 
            onPress={()=>navigation.goBack()}>
            <Image source={Icon.back} style={Styles.icon} />
            </TouchableOpacity>
            <Text style={[Styles.H1,{marginVertical:15}]}>{ScreenConstent.Wallet.name}</Text>

            <View style={Styles.cardContainer}>
                <>
                    <Text style={Styles.P1}>{ScreenConstent.Wallet.UberCash}</Text>
                    <View style={Styles.Textcontainer}>
                        <Text style={Styles.H1}>$0.00</Text>
                        <Image source={Icon.rightarrrow} style={Styles.icon} />
                    </View>
                </>
                <View style={Styles.giftcardbutton}>
                    <Text style={[Styles.P1, { color: COLORS.white }]}>+ </Text>
                    <Text style={[Styles.P1, { color: COLORS.white }]}>{buttons.giftcard}</Text>
                </View>

            </View>
            <View style={Styles.sendgiftcard}>
                <View>
                    <Text style={Styles.P1}>{buttons.SendGift}</Text>
                    <View style={Styles.Textcontainer}>
                        <Text style={[Styles.H2, { marginVertical: 10 }]}>{ScreenConstent.Wallet.description}</Text>
                        <Image source={Icon.giftbox} style={Styles.icon} />
                    </View>
                </View>
                <View style={Styles.Sendgiftbutton}>
                    <Text style={Styles.P1}>{buttons.SendGift}</Text>
                </View>

            </View>
            <Text style={Styles.H2}>{ScreenConstent.Wallet.Addpament}</Text>
            <View style={Styles.Seperater} />

            <View >
                <Text style={[Styles.P1]}>{ScreenConstent.Wallet.rideprofile}</Text>
                <View>
                    <TouchableOpacity style={Styles.buttoncontainer}>
                        <View style={Styles.imagecontainer}>
                            <Image source={Icon.driver} style={[Styles.icon, { tintColor: COLORS.white }]} />
                        </View>
                        <Text style={Styles.P1}>{ScreenConstent.Wallet.personal}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttoncontainer}>
                        <View style={Styles.imagecontainer}>
                            <Image source={Icon.driver} style={[Styles.icon, { tintColor: COLORS.white }]} />
                        </View>
                        <View>
                            <Text style={[Styles.P1, { color: "#031045" }]}>{ScreenConstent.Wallet.Startusinguber}</Text>
                            <Text style={[Styles.P1, { color: "gray" }]}>{ScreenConstent.Wallet.turnon}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.Seperater} />
                <Text style={[Styles.P1]}>{ScreenConstent.Wallet.Vouchers}</Text>
                <TouchableOpacity style={Styles.buttoncontainer}>
                    <View style={Styles.imagecontainer}>
                        <Image source={Icon.driver} style={[Styles.icon, { tintColor: COLORS.white }]} />
                    </View>
                    <Text style={Styles.P1}>{ScreenConstent.Wallet.Vouchers}</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default Wallet