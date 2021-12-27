import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { icon } from '../../config'

export default function Logo() {
  return (
  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:20}}>
    <Image source={icon.eatmelogo} style={styles.image} />
    <Text style={styles.Text}>EatMe</Text>
    </View>)
}

const styles = StyleSheet.create({
  image: {
      
    width: "22%",
    height:"170%",
    
    resizeMode:"contain"
  },
  Text:{
    fontSize:35,
    fontWeight:"700",
    color:"darkorange"
  }
})