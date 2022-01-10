import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './customdrawer';
import Roottab from '../Tab Navigation/Roottab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true, headerStyle: { backgroundColor: 'transparent' }, headerTitle: '',
        drawerStyle: { width: 300 }
      }}
    >
      <Drawer.Screen name="Root" component={Roottab} options={{ headerShown: false }} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigation