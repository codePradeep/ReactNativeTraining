import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  HelpViewModel, 
  HomeViewModel, 
  LoginViewModel, 
  MessagesViewModel, 
  OnBoardingViewModel, 
  SearchViewModel, 
  SettingsViewModel, 
  SplashScreenViewModel, 
  UserprofileViewModel, 
  WalletViewModel } from '../viewmodels';
import { Screens } from '../config';



// type rootnode={
//     Home:undefined;
//     login:undefined;
// }

const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchViewModel"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SplashScreenViewModel' component={SplashScreenViewModel} />
        <Stack.Screen name={Screens.OnBoardingViewModel} component={OnBoardingViewModel} />
        <Stack.Screen name={Screens.HomeViewModel} component={HomeViewModel} />
        <Stack.Screen name={Screens.UserprofileViewModel} component={UserprofileViewModel} />
        <Stack.Screen name={Screens.WalletViewModel} component={WalletViewModel} />
        <Stack.Screen name={Screens.HelpViewModel} component={HelpViewModel} /> 
        <Stack.Screen name={Screens.MessagesViewModel} component={MessagesViewModel} />
        <Stack.Screen name={Screens.SettingsViewModel} component={SettingsViewModel} />
        <Stack.Screen name={Screens.LoginViewModel} component={LoginViewModel} />
        <Stack.Screen name={Screens.SearchViewModel} component={SearchViewModel} />





      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routenavigation;