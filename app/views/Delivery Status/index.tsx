import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Abutton } from "../../common";
import { COLORS, Constant, FONTS, icon } from "../../config";
import { Deliverystatusdata } from "../../config/Deliverystatus";
import style from "./style";

interface DeliveryStatus {
    navigation: any
    currentstep: number
}

const DeliveryStatus = (props: DeliveryStatus) => {
    const { navigation, currentstep } = props


    return (
        <View style={style.mainContainer}>
            <Text style={[FONTS.h3, style.Hedertext]}>{Constant.screens.deliverystatus}</Text>
            <View style={style.Container}>
                <View style={style.firstContainer}>
                    <Text style={style.text}>{Constant.DeliveryStatussScreen.estimate}</Text>
                    <Text style={style.subheadertext}>12 Sept 2020 /12 :30 PM</Text>
                    <ScrollView >
                        <View style={style.cardcontainer}>
                            <View style={style.textordercontainer}>
                                <Text style={[FONTS.body3, { color: COLORS.black }]}>{Constant.DeliveryStatussScreen.trackorder}</Text>
                                <Text style={style.text}>N3332NN23</Text>
                            </View>
                            <View style={style.seperator} />
                            {Deliverystatusdata.map((item, index) => {
                                return (
                                    <View
                                        key={index}>
                                        <View style={style.listcontainer}>
                                            <Image source={icon.ok} style={[style.icon, { tintColor: index <= currentstep ? COLORS.primary : COLORS.gray }]} />
                                            <View style={style.textcontainer}>
                                                <Text style={FONTS.h4}>{item.title}</Text>
                                                <Text style={FONTS.body4}>{item.subtitle}</Text>
                                            </View>
                                        </View>
                                        {index < Deliverystatusdata.length - 1 &&
                                            <View>
                                                {index < currentstep && <View style={style.line} />}
                                                {index >= currentstep &&

                                                    <View style={style.dottedline} />
                                                }
                                            </View>
                                        }
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                {currentstep == 4 ? <Abutton title={Constant.Button.Done} /> : <View style={style.secendContainer}>
                    <TouchableOpacity

                        onPress={() => navigation.goBack()}
                        style={style.button}>
                        <Text style={style.buttontext}>{Constant.Button.cancel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        {...props}
                        onPress={() => navigation.navigate("MapViewModel")}
                        style={style.button}>
                        <Text style={style.buttontext}>{Constant.Button.mapview}</Text>
                    </TouchableOpacity>
                </View>}
            </View>

        </View>
    )
}
export default DeliveryStatus