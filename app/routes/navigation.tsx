import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import paypal from '../views/paypal';
import DemoPaypal from '../views/DemoPaypal';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demopaypal">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
      
        <Stack.Screen name="paypal" component={paypal} />
        <Stack.Screen name="Demopaypal" component={DemoPaypal} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;