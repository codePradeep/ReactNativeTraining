import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel } from '../viewmodels';
import Homepage from '../views/Home/Homepage';
import Loginpage from '../views/Login/Loginpage';
import Counterdemo from '../views/Counterscreen/counter';
import Apicall from '../views/Apicall';
import ThunkApp from '../viewmodels/ReduxApimodel';
import ApiCallDemo from '../views/ApiCallDemo';
import fetchData from '../viewmodels/ApiCallModel';

type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homemodel} />
        <Stack.Screen name="login" component={Loginmodel} />
        <Stack.Screen name="counter" component={Counterdemo} />
        {/* <Stack.Screen name="Apicalldemo" component={Apicall} />
        <Stack.Screen name="reduxApicalldemo" component={ThunkApp} /> */}
        <Stack.Screen name="calldemo" component={fetchData} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;