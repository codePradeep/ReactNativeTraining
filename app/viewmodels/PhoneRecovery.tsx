
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from '../views/PhoneOtp//PhoneNumber';
import VerifyCode  from '../views/PhoneOtp/VerifyCode'
import { Alert } from 'react-native';
import { Screen } from '../config';
import DrawerNavigation from '../routes/Drawer Navigation';

interface PhoneRecoveryModelprops{
    navigation:any
}
export default function PhoneRecoveryModel( props:PhoneRecoveryModelprops) {
  const {navigation}=props

  const [confirm, setConfirm] = useState<any |null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber:string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error)
    }
  }

  async function confirmVerificationCode(code:any) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
      setAuthenticated(true)
    } catch (error) {
      Alert.alert('Invalid code');
    }
  }

//   auth().onAuthStateChanged((user) => {
//     if(user) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   })

  if (authenticated){
    return <DrawerNavigation />
  }
  

  if (confirm) 
  return (
          <VerifyCode onSubmit={confirmVerificationCode} navigation={navigation} />
    );

  return( 
  
         <PhoneNumber onSubmit={signIn} />
  
  
  );
}
