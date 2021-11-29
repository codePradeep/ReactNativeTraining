import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import Homepage from '../views/Home/Homepage';
import Loginpage from '../views/Login/Loginpage';
import Counterdemo from '../views/Counterscreen/counter';
import Pushnotification from '../views/Push Notification';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PushNotification">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
        <Stack.Screen name="counter" component={Counterdemo} />
       
        <Stack.Screen name="PushNotification" component={Pushnotification} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;