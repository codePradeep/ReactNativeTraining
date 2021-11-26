import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import Homepage from '../views/Home/Homepage';
import Counterdemo from '../views/Counterscreen/counter';
import ThunkApp from '../viewmodels/ReduxApimodel';
import ApiCallDemo from '../views/ApiCallDemo';
import fetchData from '../viewmodels/ApiCallModel';
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
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="Map" component={Googlemap} />
        <Stack.Screen name="Map1" component={MapDirections} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;