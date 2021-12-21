import React from "react"
import { TouchableOpacity, View, Image, Alert, Text } from "react-native"
import { icon } from "../../config";
import { useOrientation } from "../../config/useOrientation";
import styles from "./style"

interface buttonprops {
  title: string
  url: number
  ScreenToNavigate: string
  navigation: any
}

const SettingButton = (props: buttonprops) => {
  const { navigation, url, title, ScreenToNavigate } = props
  const orientation = useOrientation();




  return (

    <TouchableOpacity
      style={styles(orientation).button}
      onPress={() => navigation.navigate(ScreenToNavigate)} >

      <View style={styles(orientation).container}>
        <Image source={url} style={styles(orientation).image} />
        <Text style={styles(orientation).title}> {title}</Text>
        <Image source={icon.right_arrow} style={styles(orientation).imageRight} />
      </View>
    </TouchableOpacity>

  )
}


export default SettingButton
