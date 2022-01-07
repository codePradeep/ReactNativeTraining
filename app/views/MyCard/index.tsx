import React from 'react';
import {
    View,
    Text,
    
    TouchableOpacity,
    Image
} from 'react-native';
import { COLORS, Constant, FONTS, icon } from '../../config';
import styles from './style';



interface Mycardprops {
    navigation: any
    istoggle: {
        master: boolean;
        google: boolean;
        apple: boolean;
        visa: boolean;
        paypal: boolean;
    }
    data: any
    setistoggle: any
}

const MyCard = (props: Mycardprops) => {
    const { navigation, istoggle, setistoggle, data } = props
    return (
        <View style={styles.MainContainer}>

            <View style={styles.headercontainer}>
                <View style={styles.headersubcontainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.headerleftimagecontainer}>
                            <Image source={icon.left_arrow} style={styles.headerleftimage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>{Constant.screens.MYCARDS}</Text>
                    <View style={styles.HeaderRight} />
                </View>
            </View>

            <TouchableOpacity onPress={() => setistoggle({ ...data, master: true })}>
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

            <TouchableOpacity onPress={() => setistoggle({ ...data, google: true })}>
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
            <Text style={ FONTS.h3}>Add New Card</Text>

            <View style={styles.subContainer}>


                <TouchableOpacity onPress={() => setistoggle({ ...data, apple: true })}>
                    <View style={styles.CardContainer}>
                        <View style={[styles.subcardcontainer, { borderColor: istoggle.apple ? COLORS.primary : COLORS.lightGray1 }]}>
                            <View style={styles.textcontainer}>
                                <Image source={icon.Card} style={styles.CardIcon} />
                                <Text style={styles.cardText}>{Constant.Card.Apple}</Text>
                            </View>
                            <Image source={istoggle.apple ? icon.rediocheck : icon.rediouncheck} style={styles.redioIcon} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setistoggle({ ...data, visa: true })}>
                    <View style={styles.CardContainer}>
                        <View style={[styles.subcardcontainer, { borderColor: istoggle.visa ? COLORS.primary : COLORS.lightGray1 }]}>
                            <View style={styles.textcontainer}>
                                <Image source={icon.visa} style={styles.CardIcon} />
                                <Text style={styles.cardText}>{Constant.Card.Visa}</Text>
                            </View>
                            <Image source={istoggle.visa ? icon.rediocheck : icon.rediouncheck} style={styles.redioIcon} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setistoggle({ ...data, paypal: true })}>
                    <View style={styles.CardContainer}>
                        <View style={[styles.subcardcontainer, { borderColor: istoggle.paypal ? COLORS.primary : COLORS.lightGray1 }]}>
                            <View style={styles.textcontainer}>
                                <Image source={icon.paypal} style={styles.CardIcon} />
                                <Text style={styles.cardText}>{Constant.Card.Paypal}</Text>
                            </View>
                            <Image source={istoggle.paypal ? icon.rediocheck : icon.rediouncheck} style={styles.redioIcon} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyCard