import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
import { Abutton, Header } from '../../common';
import { COLORS, Constant, FONTS, icon, Screen } from '../../config';
import styles from './style';



interface Checkoutprops {
    navigation: any
    istoggle: {
        master: boolean;
        google: boolean;
    }
    data: any
    setistoggle: any
    modalVisible: boolean
    setModalVisible:any
}

const Checkout = (props: Checkoutprops) => {
    const {  navigation,istoggle, setistoggle, data, modalVisible, setModalVisible } = props



    return (
        <View style={styles.parentContainer} >
            <View style={styles.MainContainer}>

              <Header headertitle={Constant.screens.checkout} navigation={navigation} HeaderRightComponent={undefined} />

                <ScrollView style={styles.scrollview}>

                    <TouchableOpacity onPress={() => { setistoggle({ ...data, master: true }), setModalVisible(true) }}>
                        <View style={styles.CardContainer}>
                            <View style={[styles.subcardcontainer, { borderColor: istoggle.master ? COLORS.primary : COLORS.lightGray1 }]}>
                                <View style={styles.textcontainer}>
                                    <Image source={icon.master} style={styles.CardIcon} />
                                    <Text style={styles.cardText}>{Constant.Card.master}</Text>
                                </View>
                                <Image source={istoggle.master ? icon.rediocheck : icon.rediouncheck} style={styles.redioIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setistoggle({ ...data, google: true }), setModalVisible(true) }}>
                        <View style={styles.CardContainer}>
                            <View style={[styles.subcardcontainer, { borderColor: istoggle.google ? COLORS.primary : COLORS.lightGray1 }]}>
                                <View style={styles.textcontainer}>
                                    <Image source={icon.Googlepay} style={styles.CardIcon} />
                                    <Text style={styles.cardText}>{Constant.Card.Google}</Text>
                                </View>
                                <Image source={istoggle.google ? icon.rediocheck : icon.rediouncheck} style={styles.redioIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={FONTS.h3}>{Constant.checkoutScreen.DA}</Text>
                            <View style={styles.addressContainer}>
                                <Image source={icon.target} style={[styles.Icon, { marginHorizontal: 5 }]} />
                                <TextInput placeholder="Address" style={styles.addressinput} />
                            </View>
                        </View>
                        <View>
                            <Text style={FONTS.h3}>{Constant.checkoutScreen.AddCoupon}</Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate(Screen.MyCouponModel)}
                             style={styles.textinpute}>
                                <TextInput placeholder={Constant.checkoutScreen.Couponcode} style={styles.Inputtext} />
                                <Image source={icon.coupon} style={styles.Icon} />
                            </TouchableOpacity>
                        </View>



                        <Modal animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {

                                setModalVisible(!modalVisible);
                            }} >

                            <View style={styles.scrollview} />


                            <View style={styles.modalView}>
                                <View style={styles.modalTextcontainer}>
                                    <Text style={styles.ModalSubText}>{Constant.checkoutScreen.subtotoal}</Text>
                                    <Text style={styles.ModalSubText}>$37.97</Text>
                                </View>
                                <View style={styles.modalTextcontainer}>
                                    <Text style={styles.ModalSubText}>{Constant.checkoutScreen.Shipping}</Text>
                                    <Text style={styles.ModalSubText}>$0.00</Text>
                                </View>
                                <View style={styles.ModalTextSeperator} />
                                <View style={styles.modalTextcontainer}>
                                    <Text style={styles.modalText}>{Constant.checkoutScreen.Total}</Text>
                                    <Text style={styles.modalText}>$37.97</Text>
                                </View>

                                <Abutton title={Constant.Button.PlaceyourOrder} OnPress={() => { setModalVisible(false), setistoggle({ ...data }),navigation.navigate(Screen.SuccessModel) }} />

                            </View>

                        </Modal>

                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

export default Checkout