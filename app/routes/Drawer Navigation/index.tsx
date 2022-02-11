import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import CustomDrawer from './customdrawer';

import Animated from 'react-native-reanimated';
import { NoticationSettingModel } from '../../viewmodels';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
   
    
      drawerContent={props =>{return(<CustomDrawer {...props} />)}}
      screenOptions={{
      //  overlayColor:"none",
        headerShown: true, headerStyle: { backgroundColor: 'transparent' }, headerTitle: '',
        drawerStyle: { width: "70%" },
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen name="home" 
      component={NoticationSettingModel} 
      options={{ headerShown: false }} />
       

    </Drawer.Navigator>
  );
}

export default DrawerNavigation