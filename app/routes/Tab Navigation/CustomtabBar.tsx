import React, { useEffect, useRef } from "react"
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../config"


import styles from "./style";

interface Tabbaritemprops {
  focused: any
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
      style={[styles.container, { flex: focused ? 1 : 0 ,}]} >

      <View
        ref={viewRef}

        style={[StyleSheet.absoluteFillObject, { backgroundColor:focused ?  COLORS.primary:"", borderRadius: 10 }]} />
      <View style={[styles.btn,{width:125}]}>
        <Image style={[styles.image, { tintColor: focused ? COLORS.white : COLORS.primary, }]}
          source={ICON} />

        <View
          ref={textViewRef}>
           <Text
            numberOfLines={1}
             style={styles.textstyle}>{label}</Text>
          {/* {focused ? <Text style={styles.textstyle}>{label}</Text> : null} */}
        </View>
      </View>
    </View>
    </View>
  
  )

}


export default TabbarItem