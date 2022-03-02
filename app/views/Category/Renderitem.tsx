import React, { memo } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, selectedTheme } from "../../config";
import styles from "./style";

interface renderprops {
  index: number
  item: {
    id: number;
    label: string;
    icon: any;
  }
  defaultitem: string
  setdefaultitem: React.Dispatch<React.SetStateAction<string>>
  setdefaulticon: React.Dispatch<React.SetStateAction<undefined>>

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

export default memo(Renderitem)