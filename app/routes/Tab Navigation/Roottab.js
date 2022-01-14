
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDrawerStatus,useDrawerProgress} from '@react-navigation/drawer';
import React, { useRef, useState ,useEffect} from 'react';
//import { Animated } from 'react-native';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { COLORS, icon } from '../../config';
import { useOrientation } from '../../config/useOrientation';
import { Homemodel, MyCartModel, NoticationSettingModel, NotificationTabModel, RiderReviewModel } from '../../viewmodels';
import TabbarItem from './TabbarItem';

const Tab = createBottomTabNavigator();

const Roottab = ({navigation,style}) => {
  const orientation = useOrientation();

  const isStatus = useDrawerStatus();
  const isprogressdata=useDrawerProgress()
  
  // const aniVar = useRef(new Animated.Value(0)).current;
  // const scale = aniVar.interpolate( {
  //     inputRange: [0, 1],
  //     outputRange: [1, 0.9],
  //   });
  
  const scale = Animated.interpolateNode(isprogressdata, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolateNode(isprogressdata, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });
  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
    overflow: 'hidden',
  };

  return (
    <View style={{flex:1,backgroundColor:COLORS.primary}}>
    <Animated.View style={[{flex:1,...animatedStyle,backgroundColor:COLORS.primary}]}>
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle:{
          height:70,
          paddingHorizontal:20,
          backgroundColor: COLORS.white2,
          
        }

      }} >
      <Tab.Screen name="HomeTab" component={Homemodel}
      
            options={{      
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.home} label={'Home'} />)
            }} />

      <Tab.Screen name="Search" component={Homemodel}
            options={{
              
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.search} label={'Search'} />),
            }} />

      <Tab.Screen name="Cart" component={MyCartModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.cart} label={'Cart'} />),
            }} />

      <Tab.Screen name="Favouritetab" component={RiderReviewModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.favourite} label={'Favourite'} />),
            }} />
      <Tab.Screen name="Notification" component={NotificationTabModel}
            options={{
              tabBarIcon: ({ focused }) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.notification} label={'Notification'} />),
            }} />

    </Tab.Navigator>
     </Animated.View>
     </View>
  );
}

export default Roottab

