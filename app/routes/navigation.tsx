import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryModel,  CourseListingModel, CourseModel, Homemodel,InstructorProfileModel,Loginmodel, MembershipModel, NotificationTabModel, OnboardingModel, RegistrModel, SearchModel } from '../viewmodels';
import Roottab from './Tab Navigation';
import ProfileModel from '../viewmodels/ProfileModel';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


// type rootnode={
//     Home:undefined;
//     login:undefined;
// }


const Stack = createNativeStackNavigator<any>();

const Routenavigation =(props:any) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingModel">
        <Stack.Screen name="RegistrModel" component={RegistrModel} options={{ headerShown:false }} />
        <Stack.Screen name="Loginmodel" component={Loginmodel} options={{ headerShown:false }}/>     
        <Stack.Screen name="CategoryModel" component={CategoryModel} options={{ headerShown:false }}/> 
        <Stack.Screen name="NotificationTab" component={NotificationTabModel} options={{ headerShown:false }}/>  
        <Stack.Screen name="MembershipModel" component={MembershipModel} options={{ headerShown:false }}/> 
        <Stack.Screen name="CourseListingModel" component={CourseListingModel} options={{ headerShown:false }}/>
        <Stack.Screen name="OnboardingModel" component={OnboardingModel} options={{ headerShown:false }}/> 

       
       {/* Tab Secreen */}
        <Stack.Screen name="SearchModel" component={SearchModel} options={{ headerShown:false }}/> 
        <Stack.Screen name="Roottab" component={Roottab} options={{ headerShown:false }}/> 
        <Stack.Screen name="Homemodel" component={Homemodel} options={{ headerShown:false }}/> 
        <Stack.Screen name="InstructorProfileModel" component={InstructorProfileModel} options={{ headerShown:false }}/> 
        <Stack.Screen name="CourseModel" component={CourseModel} options={{ headerShown:false }}/>
        <Stack.Screen name="ProfileModel" component={ProfileModel} options={{ headerShown:false }}/>    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;