import React from "react"
import { TouchableOpacity, View, Image, Alert } from "react-native"
import { icon } from "../../config";
import { useOrientation } from "../../config/useOrientation";
import styles from "./style"


const HeaderButton = (props: any) => {
  const orientation = useOrientation();



  return (
    <View style={styles(orientation).maincontainer}>
      <TouchableOpacity

        //    onPress={props.onPress}
        onPress={() => Alert.alert("info of this app")}
      >
        <View style={styles(orientation).container}>
          <Image
            style={styles(orientation).image}
            source={icon.help}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}


export default HeaderButton
