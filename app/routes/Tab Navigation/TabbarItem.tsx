import React, { useEffect, useRef } from "react"
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS, icon } from "../../config"

import * as Animatable from 'react-native-animatable';
import styles from "./style";

interface Tabbaritemprops {
  focused: any
  orientation: any
  ICON: any,
  label: string,
  accessibilityState: any

}

const TabbarItem = (props: any) => {
  const { focused, orientation, ICON, label } = props

  const viewRef = useRef<any | null>(null);
  const textViewRef = useRef<any | null>(null);


 

  return (
   
   <View style={styles.maincontainer}>
    <View
      style={[styles.container, { flex: focused ? .9 : 0 ,}]} >

      <Animatable.View
        ref={viewRef}

        style={[StyleSheet.absoluteFillObject, { backgroundColor:focused ?  COLORS.primary:"", borderRadius: 16 }]} />
      <View style={[styles.btn,{width:76}]}>
        <Image style={[styles.image, { tintColor: focused ? COLORS.white2 : COLORS.gray, }]}
          source={ICON} />

        <Animatable.View
          ref={textViewRef}>
          {focused && <Text
            numberOfLines={1}
             style={styles.textstyle}>{label}</Text>}
          {/* {focused ? <Text style={styles.textstyle}>{label}</Text> : null} */}
        </Animatable.View>
      </View>
    </View>
    </View>
  
  )

}


export default TabbarItem