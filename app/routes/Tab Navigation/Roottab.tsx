
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import { useOrientation } from '../../config/useOrientation';
import CourseModal from '../../viewmodels/CourseModel';
import Details from '../../views/Details';
import CameraTest from '../../views/imagepicker test/App';
import Loginpage from '../../views/Login/Loginpage';
import Progress from '../../views/Progress';
import SettingsPage from '../../views/Settings';



import styles from './style';

interface tabprop {
  orientation: boolean
}


const Tab = createBottomTabNavigator();



const Roottab = () => {

  const orientation = useOrientation();
  return (
    <Tab.Navigator screenOptions={{
      tabBarBackground:()=>(<View style={{flex:1,backgroundColor:'rgba(26, 24, 21,1)'}}></View>),
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor:"lightgray",
          
       
          tabBarLabelPosition: "below-icon",
          headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
           tabBarStyle: { height: 60 },

    }} >
      <Tab.Screen name="Home" component={CourseModal}

        options={{
          tabBarIcon: ({focused}) => {
            return (<Image
              style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
              source={require('../../assets/home.png')} />
            );
          }

        }} />

      <Tab.Screen name="Progress" component={Progress} options={{

        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={require('../../assets/progress.png')} />
          );
        }

      }} />

      <Tab.Screen name="Inbox" component={Loginpage} options={{
        tabBarIcon: ({focused}) => {
          return (<Image
            style={[styles(orientation).image,{tintColor:focused? "red":"white"}]}
            source={require('../../assets/inbox.png')} />
          );
        }

      }} />

      <Tab.Screen name="Settings" component={SettingsPage} options={{
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