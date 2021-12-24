
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import {icon } from '../../config';
import { useOrientation } from '../../config/useOrientation';
import { ProgressModel ,CourseModal ,SettingModel} from '../../viewmodels';
import TestScreen from '../../views/test';


import styles from './style';

const Tab = createBottomTabNavigator();

const Roottab = () => {

  const orientation = useOrientation();
  return (
    <Tab.Navigator screenOptions={{
      tabBarBackground:()=>(<View style={styles(orientation).tabbarbackground}></View>),
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor:"lightgray",
          
       
          tabBarLabelPosition: "below-icon",
          headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
           tabBarStyle: { height: 60 },

    }} >
      <Tab.Screen name="Home" component={CourseModal}

        options={{ headerShown:false,
          tabBarIcon: ({focused}) => {
            return (<Image
              style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
              source={icon.hometab} />
            );
          }

        }} />

      <Tab.Screen name="Progress" component={ProgressModel} options={{

        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={icon.progresstab} />
          );
        }

      }} />

      <Tab.Screen name="Inbox" component={TestScreen} options={{
        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={icon.inboxtab} />
          );
        }

      }} />

      <Tab.Screen name="Settings" component={SettingModel} options={{
        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={icon.settingstab} />
          );
        }

      }} />


    </Tab.Navigator>
  );
}

export default Roottab