import React, { useRef, useState } from "react"
import { Animated, Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../config"
import styles from "./style";


interface Tabbaritemprops {
  focused: any
  ICON: any,
  label: string,

}

const TabbarItem = (props: Tabbaritemprops) => {
  const { focused, ICON, label } = props
  const width = Dimensions.get("screen").width
  const translateValue = useRef(new Animated.Value(0)).current
  const rotatevalue =  useRef(new Animated.Value(0)).current


  Animated.parallel([
    
  Animated.spring(translateValue, {
    toValue: 1,
    friction:3,
    velocity: 10,
    useNativeDriver: true,
  }),
  Animated.timing(rotatevalue,{
    toValue:100,
    duration:500,
    useNativeDriver: true,
  })
  ]).start()
  const rotate=rotatevalue.interpolate({
    inputRange:[0,100,200],
    outputRange:["0deg","180deg","360deg"]
})
  return (
    <View style={styles.maincontainer}>
      <View style={[styles.container, { flex: 1 }]} >
        <Animated.View
          style={[StyleSheet.absoluteFillObject, {
          transform: [{ scale:translateValue },
          {rotate:rotate}]
          },
          { backgroundColor: focused ? COLORS.primary : undefined, borderRadius: 10 }]} />
        <View style={[styles.btn, { width: width * .301 }]}>
          <Image style={[styles.image, { tintColor: focused ? COLORS.white : COLORS.primary, }]}
            source={ICON} />
         {focused && <Text numberOfLines={1}style={styles.textstyle}>{label}</Text>}
        </View>

      </View>

    </View >

  )

}


export default TabbarItem