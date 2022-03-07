import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelpViewModel, HomeViewModel, MessagesViewModel, SplashScreenViewModel, UserprofileViewModel, WalletViewModel } from '../viewmodels';
import { Screens } from '../config';
import SettingsViewModel from '../viewmodels/SettingsViewModel';


// type rootnode={
//     Home:undefined;
//     login:undefined;
// }

const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingsViewModel"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SplashScreenViewModel' component={SplashScreenViewModel} />
        <Stack.Screen name={Screens.HomeViewModel} component={HomeViewModel} />
        <Stack.Screen name={Screens.UserprofileViewModel} component={UserprofileViewModel} />
        <Stack.Screen name={Screens.WalletViewModel} component={WalletViewModel} />
        <Stack.Screen name={Screens.HelpViewModel} component={HelpViewModel} /> 
        <Stack.Screen name={Screens.MessagesViewModel} component={MessagesViewModel} />
        <Stack.Screen name={Screens.SettingsViewModel} component={SettingsViewModel} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routenavigation;