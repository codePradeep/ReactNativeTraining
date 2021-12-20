
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import { useOrientation } from '../../config/useOrientation';
import { ProgressModel ,CourseModal ,SettingModel} from '../../viewmodels';


import styles from './style';

interface tabprop {
  orientation: boolean
}
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
              source={require('../../assets/home.png')} />
            );
          }

        }} />

      <Tab.Screen name="Progress" component={ProgressModel} options={{

        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={require('../../assets/progress.png')} />
          );
        }

      }} />

      <Tab.Screen name="Inbox" component={ProgressModel} options={{
        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={require('../../assets/inbox.png')} />
          );
        }

      }} />

      <Tab.Screen name="Settings" component={SettingModel} options={{
        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={require('../../assets/settings.png')} />
          );
        }

      }} />


    </Tab.Navigator>
  );
}

export default Roottab