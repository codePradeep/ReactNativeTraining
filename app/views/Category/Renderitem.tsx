import React from "react";
import {  Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, selectedTheme } from "../../config";
import styles from "./style";

interface renderprops {
  index: any
  item: {
    id: number;
    label: string;
    icon: any;
  }
  defaultitem: any
  setdefaultitem: any
  setdefaulticon: any

}


const Renderitem = (props: renderprops) => {
  const { item, defaultitem, setdefaultitem, setdefaulticon } = props
  return (

    <TouchableOpacity
      onPress={() => { setdefaultitem(item.label), setdefaulticon(item.icon) }}
      style={[styles(selectedTheme).item,
      {
        backgroundColor: defaultitem == item.label ? selectedTheme.backgroundblueNgreen : selectedTheme.backgroundwhite3Ngray8,
        borderColor: defaultitem == item.label ? selectedTheme.borderColor1 : selectedTheme.borderColor1
      }]}>
      <Image source={item.icon}
        style={[styles(selectedTheme).Icons,
        { tintColor: defaultitem == item.label ? COLORS.white : selectedTheme.tintColor }]}
      />
      <Text style={[styles(selectedTheme).itemtext,
      { color: defaultitem == item.label ? COLORS.white : selectedTheme.textblackNwhite }]}
      
      >{item.label}</Text>
    </TouchableOpacity>
  )
}

export default Renderitem