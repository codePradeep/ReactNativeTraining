
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS, icons } from '../../config';

import { SearchModel } from '../../viewmodels';
import TabbarItem from './CustomtabBar';

const Tab = createBottomTabNavigator();

const Roottab = () => {
 

  return (
    <Tab.Navigator
    
      screenOptions={{
          
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        
        tabBarStyle:{
         // flex:1,
          height:70,
          marginHorizontal:20,
          bottom:10,
          borderRadius: 10,
          backgroundColor: COLORS.primary3,
       //   position: "absolute",
          shadowOffset: { width: 10, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 20,
          
          
          
        }
        
      }} >
      <Tab.Screen name="Home" component={SearchModel}
            options={{      
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} ICON={icons.Icon.home} label={'Home'} />)
            }} />
      <Tab.Screen name="Search" component={SearchModel}
            options={{     
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused}  ICON={icons.Icon.search} label={'Search'} />),
            }} />

      <Tab.Screen name="Profile" component={SearchModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused}  ICON={icons.Icon.profile} label={'Profile'} />),
            }} />

    </Tab.Navigator>
  );
}

export default Roottab