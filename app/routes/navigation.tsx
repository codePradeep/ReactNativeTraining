import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ChangePasswordModel,
  Communication_preferencesmodel,
  CourseDetailsModel,
  DetailsModel,
  ProfileModel
} from '../viewmodels';

import { HeaderButton, Headerlogo } from '../common';

import Roottab from './Tab Navigation/Roottab';


const Stack = createNativeStackNavigator();




const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="course" screenOptions={{
        headerTitle: "",
        headerRight: () => (<HeaderButton />),
        headerTintColor: 'rgba(176, 174, 171,1)',
        headerStyle: {
          backgroundColor: 'rgba(26, 24, 21,0.9)'
        },
      }} >
        <Stack.Screen name="ChangePassword" component={ChangePasswordModel} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsModel} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileModel} />
        <Stack.Screen name="Communication_preferences" component={Communication_preferencesmodel} />
        <Stack.Screen name="Detail" component={DetailsModel} />
        <Stack.Screen name="course" component={Roottab}
          options={{
            headerTitle: () => <Headerlogo />,
            headerRight: () => (<HeaderButton />),
            headerTintColor: "blue",
            headerStyle: {
              backgroundColor: 'rgba(26, 24, 21,0.9)',
            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;


