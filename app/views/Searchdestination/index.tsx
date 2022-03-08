import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Abutton } from "../../common";
import { COLORS, Icon } from "../../config";
import styles from "./style";

interface SearchScreenprops {
    navigation: any
    fromtext: string
    setfromtext: (text: string) => void
    desinationtext: string
    setdestinationtext: (text: string) => void
    Data: {
        latitude: number;
        latitudeDelta: number;
        longitude: number;
        longitudeDelta: number;
    }
    setData: any
}
const SearchScreen = (props: SearchScreenprops) => {
    const {
        navigation,
        fromtext,
        desinationtext,
        setdestinationtext,
        setfromtext,
        Data,
        setData } = props
    const apikey = "AIzaSyAg3rBv6bIZ6Y6BvHj-hk6s8B6i5tvNUjs"

    return (
        <SafeAreaView style={styles.MainContainer}>

            <View style={styles.firstContainer}>
                <View style={styles.flexdirection}>
                    <View style={styles.statecontainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={Icon.back} style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.circle} />
                        <View style={styles.line} />
                        <View style={styles.circle} />
                    </View>
                    <View style={styles.inputcontainer}>
                        <TextInput
                            placeholder="EnterPickupPoint"
                            style={styles.textinput}
                            value={fromtext}
                            onChangeText={setfromtext}
                        />
                        <TextInput
                            placeholder="Whare to?"
                            style={styles.textinput}
                            value={desinationtext}
                            onChangeText={setdestinationtext}
                        />
                    </View>
                </View>
                <View style={styles.plusbutton}>
                    <Text style={styles.plustext}>+</Text>
                </View>
            </View>
            <View style={styles.secendContainer}>
                <MapView
                    style={styles.mapStyle}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    onRegionChange={(Data) => { setData(Data) }}
                    initialRegion={{
                        latitude: 28.5995001,
                        longitude: 77.3315623,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <Marker
                        coordinate={{ latitude: 28.5995001, longitude: 77.3315623 }}
                        title={"Successive Technologies"}
                        pinColor="skyblue"
                        opacity={1}
                    />
                    <Marker
                        coordinate={{ latitude: Data.latitude, longitude: Data.longitude }}
                        pinColor="black"
                        opacity={1}
                    />
                </MapView>
            </View>
            <View style={styles.button}>
                <Abutton title={"Done"} onPress={undefined} />
            </View>

        </SafeAreaView>
    )
}

export default SearchScreen

