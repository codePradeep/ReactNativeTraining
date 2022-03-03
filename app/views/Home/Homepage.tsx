
import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { COLORS, Icon } from "../../config";
import styles from "./style";

interface Homepageprops {
    navigation: any
    RideType: {
        name: string;
        image: any;
    }[]
    buttons: {
        icon: any;
        name: string;
    }[]

}

const Homepage = (props: Homepageprops) => {
    const { navigation, RideType, buttons } = props
    return (
        <View style={styles.Container} >
            {/* Header */}
            <TouchableOpacity style={styles.Header}>
                <Image source={Icon.user} style={styles.UserIcon} />
            </TouchableOpacity>
            {/* banner */}
            <TouchableOpacity style={styles.BannerContainer}>
                <View style={styles.bannerText}>
                    <Text style={styles.H1}>Ready?Then Lets Roll.</Text>
                    <Text style={styles.P1}>Ride with Uber</Text>
                </View>
                <Image source={Icon.Car} style={styles.banner} />
            </TouchableOpacity>

            <View style={styles.RideTypeMainContainer}>
                {
                    RideType.map((item, index) => {
                        return (
                            <View key={index}>

                                <TouchableOpacity style={styles.RideTypeContainer}>
                                    {index == 0 && <View
                                        style={{
                                            position: "absolute",
                                            backgroundColor: "green",
                                            padding: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 20,
                                            top: -15,
                                            left: 60
                                        }}>
                                        <Text style={{ color: COLORS.white }}>Promo</Text>
                                    </View>}
                                    <Text style={styles.ridetypetext}>{item.name}</Text>
                                    <Image source={item.image} style={styles.caricon} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>


            <View style={styles.wharetoConatiner}>
                <Text style={styles.H1}>Where to?</Text>
                <TouchableOpacity style={styles.TimeButton}>
                    <Image source={Icon.clock} style={styles.smallIcon} />
                    <Text style={styles.P1}>Now</Text>
                    <Image source={Icon.down} style={styles.smallIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MainButtonContainer}>
                {buttons.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <View style={styles.childbuttonContainer}>
                                    <View style={styles.imagecontainer}>
                                        <Image source={item.icon} style={styles.smallIcon} />
                                    </View>
                                    <Text style={styles.P1}>{item.name}</Text>
                                </View>
                                <Image source={Icon.rightarrrow} style={styles.smallIcon} />
                            </TouchableOpacity>
                            <View style={styles.seperator} />
                        </View>
                    )
                })}
            </View>
            <Text style={styles.H1}>Around You</Text>
            <View style={styles.Map}>
                <MapView
                    style={styles.mapStyle}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={{
                        latitude: 28.5995001,
                        longitude: 77.3315623,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}></MapView>
            </View>



        </View>
    )
}
export default Homepage;