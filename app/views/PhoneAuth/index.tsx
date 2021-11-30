import React, { useState } from 'react';
import {View, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';


const PhoneSignIn=()=> {

 
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState<any | null>(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber:any) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log("right password",code)
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+91 ')}
      />
    );
  }

  return (
    <View>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}
export default PhoneSignIn