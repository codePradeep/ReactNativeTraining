import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Homemodel, Loginmodel } from '../viewmodels';

import { HeaderButton, Headerlogo } from '../common';

import Roottab from './Tab Navigation/Roottab';
import Details from '../views/Details';
import Communication_preferences from '../views/Communication_preferences';
import ChangePassword from '../views/ChangePassword';
import Profile from '../views/Profile';


const Stack = createNativeStackNavigator();







const Routenavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="course">
        <Stack.Screen name="Home" component={Homemodel} />
    
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile}
        options={{

          headerTitle: "",
          headerRight: () => (<HeaderButton />),
          headerTintColor: 'rgba(176, 174, 171,1)',

          headerStyle: {
            backgroundColor: 'rgba(26, 24, 21,0.9)'



          },


        }}
        
        
        />
        
        
        <Stack.Screen name="Communication_preferences" component={Communication_preferences} 
        options={{

          headerTitle: "",
          headerRight: () => (<HeaderButton />),
          headerTintColor: 'rgba(176, 174, 171,1)',

          headerStyle: {
            backgroundColor: 'rgba(26, 24, 21,0.9)'



          },


        }}
        
        
        
        />





        <Stack.Screen name="Detail" component={Details}
          options={{

            headerTitle: "",
            headerRight: () => (<HeaderButton />),
            headerTintColor: 'rgba(176, 174, 171,1)',

            headerStyle: {
              backgroundColor: 'rgba(26, 24, 21,0.9)'



            },


          }}
        />
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


