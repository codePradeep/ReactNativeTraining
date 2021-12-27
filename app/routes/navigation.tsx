import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homemodel,Loginmodel, PasswordRecoveryModel } from '../viewmodels';
import Homepage from '../views/Home/Homepage';
import Loginpage from '../views/Login/Loginpage';
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
      <Stack.Navigator initialRouteName="PasswordRecoveryModel">
        <Stack.Screen name="PasswordRecoveryModel" component={PasswordRecoveryModel} options={{ headerShown:false}}/>
        <Stack.Screen name="login" component={Loginmodel} />
        <Stack.Screen name="calldemo" component={fetchData} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;