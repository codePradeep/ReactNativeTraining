import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChangePasswordModel, Homemodel,Loginmodel, MyCardModel, MyCouponModel, NoticationSettingModel, OnboradingModel, OtpModel, PasswordRecoveryModel, SettingModel } from '../viewmodels';
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
      <Stack.Navigator initialRouteName="MyCardModel">
        <Stack.Screen name="PasswordRecoveryModel" component={PasswordRecoveryModel} options={{ headerShown:false}}/>
        <Stack.Screen name="OtpModel" component={OtpModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="OnboradingModel" component={OnboradingModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="SettingModel" component={SettingModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="ChangePasswordModel" component={ChangePasswordModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="NoticationSettingModel" component={NoticationSettingModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="MyCouponModel" component={MyCouponModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="MyCardModel" component={MyCardModel}  options={{ headerShown:false}}/>
        <Stack.Screen name="calldemo" component={fetchData} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routenavigation;