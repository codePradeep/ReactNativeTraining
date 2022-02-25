import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { COLORS, selectedTheme } from '../../config';
/**
* Override styles that get passed from props
**/
const propStyle = (percent:any, base_degrees:any) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

const renderThirdLayer = (percent:any) => {
  if(percent > 50){
    /**
    * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the propStyle function
    **/
    return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45) ]}></View>
  }else{
    return <View style={styles.offsetLayer}></View>
  }
}

const CircularProgress = ({percent}:any) => {
  let firstProgressLayerStyle;
  if(percent > 50){
      firstProgressLayerStyle = propStyle(50, -45);
  }else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return(
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Text style={styles.display}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderWidth: 10,
    borderRadius: 100,
    borderColor:COLORS.gray20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  display: {
    position: 'absolute',
    fontSize: 15,
    fontWeight: 'bold',
    color:selectedTheme.textblackNwhite
    
  },
  firstProgressLayer: {
    width: 60,
    height: 60,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    transform:[{rotateZ: '-135deg'}]
  },
  secondProgressLayer:{
    width: 60,
    height: 60,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    transform: [{rotateZ: '45deg'}]
  },
  offsetLayer: {
    width: 60,
    height: 60,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: COLORS.black,
    borderTopColor: COLORS.black,
    transform:[{rotateZ: '-135deg'}]
  }
});

export default CircularProgress;