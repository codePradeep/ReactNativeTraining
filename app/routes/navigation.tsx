import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';


type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginmodel">
        <Stack.Screen name="Home" component={Homemodel} options={{ headerShown:false }} />
        <Stack.Screen name="Loginmodel" component={Loginmodel} options={{ headerShown:false }}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;