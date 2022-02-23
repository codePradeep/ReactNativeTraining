import React  from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../config"
import styles from "./style";

interface Tabbaritemprops {
  focused: any
  ICON: any,
  label: string,

}

const TabbarItem = (props: Tabbaritemprops) => {
  const { focused, ICON, label } = props

  return (
    <View style={styles.maincontainer}>
      <View style={[styles.container, { flex: focused ? 1 : 0, }]} >
        <View
          style={[StyleSheet.absoluteFillObject,
           { backgroundColor: focused ? COLORS.primary : "", borderRadius: 10 }]} />
        <View style={[styles.btn, { width: 125 }]}>
          <Image style={[styles.image, { tintColor: focused ? COLORS.white : COLORS.primary, }]}
            source={ICON} />
          <Text numberOfLines={1}
            style={styles.textstyle}>{label}</Text>
        </View>
      </View>
    </View>

  )

}


export default TabbarItem