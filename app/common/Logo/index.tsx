import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useOrientation } from '../../config/useOrientation'

export default function Logo() {
 const orientation = useOrientation()
  return (<View style={styles(orientation).container}>
    <Image source={require('../../assets/user_avatar.png')} style={styles(orientation).image} />
    </View>)
}

const styles = (orientation:any)=>StyleSheet.create({
  container:{
    borderRadius:180,
    justifyContent:"center",
    alignItems:"center"
},
  image: {
    borderRadius:180,
    width: orientation.isLandscape ? orientation.width * 0.2 : orientation.width * 0.18,
    height: orientation.isLandscape ? orientation.height * 0.2 : orientation.height * 0.15,
    resizeMode:"contain",
    marginHorizontal: orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.02,
    marginVertical: orientation.isLandscape ? orientation.height * 0.02 : orientation.height * 0.01,
  },
})