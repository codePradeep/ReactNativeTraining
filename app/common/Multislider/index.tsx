import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, FONTS, SIZES } from "../../config";
import style from "./style";

interface Sliderprops {
    values: any
    min: any
    max: any
    postfix: any
    onValueChange: any
    prifix:string
}
const Slider = (props:Sliderprops) => {
    const {values,
        min ,
        max ,
        postfix, 
        onValueChange,
        prifix 
        }=props
    return (
 <MultiSlider 
    values={values}
    sliderLength={SIZES.width -(SIZES.padding*2)-20}
    min={min}
    max={max}
    markerOffsetY={20}
    selectedStyle={{ 
        backgroundColor:COLORS.primary
    }}
    trackStyle={{
        height:10,
        borderRadius:10,
        backgroundColor:COLORS.lightGray2
    }}
    minMarkerOverlapDistance={50}
    customMarker={(e)=>{
        return(
        <View
        style={style.container}
        
        >
            <View
            style={style.subcontainer}
            />
                <Text 
                style={{
                    marginTop:5,
                    color:COLORS.darkGray,
                    ...FONTS.body3
                }}
                >{prifix} {e.currentValue} {postfix}</Text>
        </View>)
    }}
    onValuesChange={(values)=>onValueChange(values)}
 />
    )
}

export default Slider