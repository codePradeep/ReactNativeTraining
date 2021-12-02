import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import fetchData from '../viewmodels/ApiCallModel';
import Razorpay from '../views/Razorpay';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Razorpay">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
       
        <Stack.Screen name="Razorpay" component={Razorpay} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;