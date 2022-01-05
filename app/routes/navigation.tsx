import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import fetchData from '../viewmodels/ApiCallModel';
import {
  AddNewCardModel,
  ChangePasswordModel,
  CheckoutModel,
  Homemodel, Loginmodel,
  MyAccountModel,
  MyCardModel,
  MyCouponModel,
  NoticationSettingModel,
  NotificationTabModel,
  OnboradingModel,
  OtpModel,
  PasswordRecoveryModel,
  RiderReviewModel,
  SettingModel,
  SignInModel,
  SignUpModel,
  SuccessModel
} from '../viewmodels';
import Roottab from './Tab Navigation/Roottab';



const Stack = createNativeStackNavigator();

const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpModel">
        <Stack.Screen name="PasswordRecoveryModel" component={PasswordRecoveryModel} options={{ headerShown: false }} />
        <Stack.Screen name="OtpModel" component={OtpModel} options={{ headerShown: false }} />
        <Stack.Screen name="OnboradingModel" component={OnboradingModel} options={{ headerShown: false }} />
        <Stack.Screen name="SettingModel" component={SettingModel} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePasswordModel" component={ChangePasswordModel} options={{ headerShown: false }} />
        <Stack.Screen name="NoticationSettingModel" component={NoticationSettingModel} options={{ headerShown: false }} />
        <Stack.Screen name="MyCouponModel" component={MyCouponModel} options={{ headerShown: false }} />
        <Stack.Screen name="MyCardModel" component={MyCardModel} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessModel" component={SuccessModel} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewCardModel" component={AddNewCardModel} options={{ headerShown: false }} />
        <Stack.Screen name="CheckoutModel" component={CheckoutModel} options={{ headerShown: false }} />
        <Stack.Screen name="RiderReviewModel" component={RiderReviewModel} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationTabModel" component={NotificationTabModel} options={{ headerShown: false }} />
        <Stack.Screen name="Roottab" component={Roottab} options={{ headerShown: false }} />
        <Stack.Screen name="MyAccountModel" component={MyAccountModel} options={{ headerShown: false }} />
        <Stack.Screen name="Homemodel" component={Homemodel} options={{ headerShown: false }} />
        <Stack.Screen name="SignInModel" component={SignInModel} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpModel" component={SignUpModel} options={{ headerShown: false }} />
        <Stack.Screen name="calldemo" component={fetchData} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;