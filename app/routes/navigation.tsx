import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel, SplashScreenViewModel, UserprofileViewModel, WalletViewModel } from '../viewmodels';
import { Screens } from '../config';


// type rootnode={
//     Home:undefined;
//     login:undefined;
// }

const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalletViewModel"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SplashScreenViewModel' component={SplashScreenViewModel} />
        <Stack.Screen name={Screens.HomeViewModel} component={HomeViewModel} />
        <Stack.Screen name={Screens.UserprofileViewModel} component={UserprofileViewModel} />
        <Stack.Screen name={Screens.WalletViewModel} component={WalletViewModel} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routenavigation;