import React from "react";
import MapViewScreen from "../views/Mapview";
interface MapViewModelprops {
    navigation: any
}
const MapViewModel = (props: MapViewModelprops) => {
    const { navigation } = props
    return (
        <MapViewScreen navigation={navigation} />
    )
}
export default MapViewModel;