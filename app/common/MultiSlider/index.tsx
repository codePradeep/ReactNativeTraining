import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, FONTS,  } from "../../config";
import style from "./style";
import { SIZES } from "../../config/constants/theme";

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
    sliderLength={SIZES.width}
    min={min}
    max={max}
    markerOffsetY={15}
    selectedStyle={{ 
        backgroundColor:COLORS.primary
    }}
    trackStyle={{
        height:5,
        borderRadius:10,
        backgroundColor:COLORS.gray10
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
                    color:COLORS.primary3,
                    ...FONTS.body
                }}
                >{prifix} {e.currentValue} {postfix}</Text>
        </View>)
    }}
    onValuesChange={(values)=>onValueChange(values)}
 />
    )
}

export default Slider