
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import { useOrientation } from '../../config/useOrientation';
import CourseModal from '../../viewmodels/CourseModel';
import Details from '../../views/Details';
import CameraTest from '../../views/imagepicker test/App';
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
    <Tab.Navigator  >
      <Tab.Screen name="Home" component={CourseModal}

        options={{
          
          tabBarBackground:()=>(<View style={{flex:1,backgroundColor:'rgba(26, 24, 21,1)'}}></View>),
          //tabBarActiveBackgroundColor:"red",
          tabBarLabelPosition: "below-icon",
          headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
          tabBarStyle: { height: 50 },
          tabBarIcon: () => {
            return (<Image
              style={styles(orientation).image}
              source={require('../../assets/home.png')} />
            );
          }

        }} />

      <Tab.Screen name="Progress" component={Progress} options={{
        tabBarBackground:()=>(<View style={{flex:1,backgroundColor:'rgba(26, 24, 21,1)'}}></View>),
        tabBarLabelPosition: "below-icon",
        headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
        tabBarStyle: { height: 50 },


        tabBarIcon: () => {
          return (<Image
            style={styles(orientation).image}
            source={require('../../assets/progress.png')} />
          );
        }

      }} />

      <Tab.Screen name="Inbox" component={Details} options={{
        tabBarBackground:()=>(<View style={{flex:1,backgroundColor:'rgba(26, 24, 21,1)'}}></View>),
        tabBarLabelPosition: "below-icon",
        headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
        tabBarStyle: { height: 50 },


        tabBarIcon: () => {
          return (<Image
            style={styles(orientation).image}
            source={require('../../assets/inbox.png')} />
          );
        }

      }} />

      <Tab.Screen name="Settings" component={SettingsPage} options={{
        tabBarBackground:()=>(<View style={{flex:1,backgroundColor:'rgba(26, 24, 21,1)'}}></View>),
        tabBarLabelPosition: "below-icon",
        headerShown: false, tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
        tabBarStyle: { height: 50 },


        tabBarIcon: () => {
          return (<Image
            style={styles(orientation).image}
            source={require('../../assets/settings.png')} />
          );
        }

      }} />


    </Tab.Navigator>
  );
}

export default Roottab