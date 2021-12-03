import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel } from '../viewmodels';
import Upipayment from '../views/Upi payment';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Upipayment">
        <Stack.Screen name="Home" component={Homemodel} />
        
        <Stack.Screen name="Upipayment" component={Upipayment} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;