
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Switch,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function DarkthemeTest() {
 
 const [isEnabled, setIsEnabled] = useState(false);
 
 const getTheme = async () => {
   try {
     const theme = await AsyncStorage.getItem('theme');
     return theme;
   } catch(error) {
     console.log('error', error);
   };
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: `${isEnabled ? '#fff' : '#000'}`,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
 const setTheme = async (theme:any) => {
   try {
     await AsyncStorage.setItem('theme', theme);
   } catch(error) {
     console.log('error', error);
   };
 };
 
 useEffect(() => {
   getTheme()
   .then(res => {
     setIsEnabled(res === 'light');
   })
   .catch(err => {
     console.log('error', err);
   });
 }, []);
 
 const onChangeHandler = (value:any) => {
   if (value) {
     setIsEnabled(true);
     setTheme('light');
   } else {
     setIsEnabled(false);
     setTheme('dark');
   };
 };
 
 return (
   <View style={styles.container}>
     <Switch
       onValueChange={onChangeHandler}
       value={isEnabled}
     />
    
   </View>
 );
};