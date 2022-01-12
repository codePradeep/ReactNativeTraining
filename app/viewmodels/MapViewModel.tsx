import React from "react";
import MapViewScreen from "../views/Mapview";
interface MapViewModelprops {
    navigation: any
}
const Data = {
    name: "Rahul",
    jD:"delivery man",
    DeliveryTime: "8 minutes",
    address: "Sector 11 Noida,UP"
}

const MapViewModel = (props: MapViewModelprops) => {
    const { navigation } = props

    return (
        <MapViewScreen navigation={navigation} 
        Data={Data}
        />
    )
}
export default MapViewModel;