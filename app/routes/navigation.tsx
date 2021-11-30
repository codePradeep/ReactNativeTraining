import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import Homepage from '../views/Home/Homepage';
import Loginpage from '../views/Login/Loginpage';
import Counterdemo from '../views/Counterscreen/counter';
import PhoneSignIn from '../views/PhoneAuth';
import PhoneOtp from '../views/PhoneOtp';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneOtp">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
        <Stack.Screen name="counter" component={Counterdemo} />

        
        <Stack.Screen name="PhoneAuth" component={PhoneSignIn} />
        <Stack.Screen name="PhoneOtp" component={PhoneOtp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;