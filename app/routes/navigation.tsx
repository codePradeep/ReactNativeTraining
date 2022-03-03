import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel, SplashScreenViewModel, UserprofileViewModel } from '../viewmodels';


// type rootnode={
//     Home:undefined;
//     login:undefined;
// }

const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenViewModel"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SplashScreenViewModel' component={SplashScreenViewModel} />
        <Stack.Screen name="HomeViewModel" component={HomeViewModel} />
        <Stack.Screen name="UserprofileViewModel" component={UserprofileViewModel} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;