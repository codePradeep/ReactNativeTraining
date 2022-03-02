import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel, SplashScreenViewModel } from '../viewmodels';
import Googlemap from '../views/GoogleMap';
import MapDirections from '../views/GoogleMap/MapDirections';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenViewModel" 
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name='SplashScreenViewModel' component={SplashScreenViewModel} />
        <Stack.Screen name="Map" component={Googlemap} />
        <Stack.Screen name="Map1" component={MapDirections} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;