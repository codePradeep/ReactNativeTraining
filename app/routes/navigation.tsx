import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryModel, Homemodel,Loginmodel, NotificationTabModel, RegistrModel } from '../viewmodels';


type rootnode={
    Home:undefined;
    login:undefined;
}

const Stack = createNativeStackNavigator();

const Routenavigation =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotificationTab">
        <Stack.Screen name="RegistrModel" component={RegistrModel} options={{ headerShown:false }} />
        <Stack.Screen name="Loginmodel" component={Loginmodel} options={{ headerShown:false }}/>     
        <Stack.Screen name="CategoryModel" component={CategoryModel} options={{ headerShown:false }}/> 
        <Stack.Screen name="NotificationTab" component={NotificationTabModel} options={{ headerShown:false }}/>    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;