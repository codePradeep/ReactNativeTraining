import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  ChangePasswordModel,
  NoticationSettingModel,
  SuccessModel
} from '../viewmodels';
import DrawerNavigation from './Drawer Navigation';

const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigation">
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePasswordModel" component={ChangePasswordModel} options={{ headerShown: false }} />
        <Stack.Screen name="NoticationSettingModel" component={NoticationSettingModel} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessModel" component={SuccessModel} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;