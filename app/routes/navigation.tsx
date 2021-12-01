import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';

import StripApp from '../views/Stripe';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StripApp">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
 
        <Stack.Screen name="StripApp" component={StripApp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;