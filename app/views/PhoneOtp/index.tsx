import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './screens/PhoneNumber';
import VerifyCode from './screens/VerifyCode';
import Authenticated from './screens/Authenticated';
import { Alert } from 'react-native';



export default function PhoneOtp() {

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
    } catch (error) {
      Alert.alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated)
   return (
          <Authenticated />
          );

  if (confirm) 
  return (
          <VerifyCode onSubmit={confirmVerificationCode} />
    );

  return( 
  
         <PhoneNumber onSubmit={signIn} />
  
  
  );
}
