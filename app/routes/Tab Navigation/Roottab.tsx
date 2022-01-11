
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDrawerProgress } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { COLORS, icon } from '../../config';
import { useOrientation } from '../../config/useOrientation';
import { Homemodel, MyCartModel, NoticationSettingModel, NotificationTabModel, RiderReviewModel } from '../../viewmodels';
import TabbarItem from './TabbarItem';

const Tab = createBottomTabNavigator();

const Roottab = ({navigation,style}:any) => {
   const orientation = useOrientation();

  // const progress = useDrawerProgress();
  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.9],
  // });
  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 25],
  // });

  // const animatedStyle = {
  //   borderRadius,
  //   transform: [{ scale }],
  //  // overflow: 'hidden',
  // };

  return (
    // <View style={{flex:1,backgroundColor:COLORS.primary}}>
    // <Animated.View style={[{flex:1,...animatedStyle,backgroundColor:COLORS.primary,borderRadius:20}]}>
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
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.home} label={'Home'} />)
            }} />

      <Tab.Screen name="Search" component={NoticationSettingModel}
            options={{
              
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.search} label={'Search'} />),
            }} />

      <Tab.Screen name="Cart" component={MyCartModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.cart} label={'Cart'} />),
            }} />

      <Tab.Screen name="Favouritetab" component={RiderReviewModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.favourite} label={'Favourite'} />),
            }} />
      <Tab.Screen name="Notification" component={NotificationTabModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.notification} label={'Notification'} />),
            }} />

    </Tab.Navigator>
    // </Animated.View>
    // </View>
  );
}

export default Roottab