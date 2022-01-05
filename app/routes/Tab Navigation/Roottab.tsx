
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS, icon } from '../../config';
import { useOrientation } from '../../config/useOrientation';
import { Homemodel, MyCartModel, NoticationSettingModel, NotificationTabModel, RiderReviewModel } from '../../viewmodels';
import TabbarItem from './TabbarItem';

const Tab = createBottomTabNavigator();

const Roottab = () => {
  const orientation = useOrientation();

  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle:{
          height:70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal:20,
          backgroundColor: COLORS.white2,
          
        }
        // tabBarStyle: {
        //   height: 90,
        //   position: "absolute",
          
        //   backgroundColor: COLORS.white,
        //   borderRadius: 20,
        //   borderColor: 'white',
        //   borderBottomWidth: 0,
        //   shadowColor: COLORS.orange,
        //   shadowOffset: { width: 10, height: 20 },
        //   shadowOpacity: 1,
        //   shadowRadius: 3,
        //   elevation: 20,
        //   flex: 1,
        //   paddingHorizontal:20,
        //   marginHorizontal:10,
          
          
          
        // },

      }} >
      <Tab.Screen name="Home" component={Homemodel}
      

            options={{      
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.home} label={'Home'} />)
            }} />

      <Tab.Screen name="Search" component={NoticationSettingModel}
            options={{
              
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.search} label={'Search'} />),
            }} />

      <Tab.Screen name="Cart" component={MyCartModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.cart} label={'Cart'} />),
            }} />

      <Tab.Screen name="Favourite" component={RiderReviewModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.favourite} label={'Favourite'} />),
            }} />
      <Tab.Screen name="Notification" component={NotificationTabModel}
            options={{
              tabBarIcon: ({ focused }: any) => (<TabbarItem focused={focused} orientation={orientation} ICON={icon.notification} label={'Notification'} />),
            }} />

    </Tab.Navigator>
  );
}

export default Roottab