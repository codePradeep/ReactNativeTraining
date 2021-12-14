import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useOrientation } from '../../config/useOrientation'

interface logoprops{

}


 const Logo=(props:any) =>{
 const orientation = useOrientation()
  return (<View style={styles(orientation).container}>
    <Image source={props.source} style={styles(orientation).image} />
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
    width: orientation.isLandscape ? orientation.width * 0.092 : orientation.width * 0.17,
    height: orientation.isLandscape ? orientation.height * 0.19 : orientation.height * 0.082,
    
    marginHorizontal: orientation.isLandscape ? orientation.width * 0.02 : orientation.width * 0.02,
    marginVertical: orientation.isLandscape ? orientation.height * 0.02 : orientation.height * 0.01,
  },
})

export default Logo