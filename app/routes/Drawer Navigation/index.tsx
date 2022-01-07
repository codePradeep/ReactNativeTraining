import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './customdrawer';
import Roottab from '../Tab Navigation/Roottab';
import { Homemodel } from '../../viewmodels';

const Drawer = createDrawerNavigator();


 const DrawerNavigation=()=> {
  return (
       <Drawer.Navigator
        
screenOptions={{headerShown:true,headerStyle: { backgroundColor: 'transparent'}, headerTitle: '',
drawerStyle:{
  width:300
}


}} 
        drawerContent={props => <CustomDrawer {...props} />} >

      <Drawer.Screen name="Root" component={Roottab}   options={{
      headerShown:false
          
        }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation