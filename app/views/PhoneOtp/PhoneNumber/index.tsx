import React, { useState } from 'react';
import {  Text, View, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Abutton } from '../../../common';
import Logo from '../../../common/Logo';
import { icon, Constant } from '../../../config';

import styles from './style';


const PhoneNumber=(props: { onSubmit: (arg0: string) => void; }) =>{
  


  const [phoneNumber, setPhoneNumber] = useState<any | null>(null);

  return (
       <View style={styles.mainContainer}>
       <Logo />
       <View style={styles.container}>
           <View style={styles.subcontainer}>
               <View>

                   <View style={styles.textcontainer}>
                       <Text style={styles.text}>Password Recovery</Text>
                       <Text style={styles.Subtext}>Please enter your Phone Number to recover your password</Text>
                   </View>
               </View>
               <View>
                   <Text style={styles.Email}>Phone Number</Text>
                   <View style={styles.input}>
                       <TextInput
                       autoFocus
                           keyboardType={"phone-pad"}
                           onChangeText={setPhoneNumber}
                           style={styles.textinput}
                       />
                       {/* <Image source={isvalid ? icon.check_tick : icon.wrong} style={styles.icon} /> */}
                       
                   </View>

                   
               </View>

           </View>
           <Abutton title={Constant.Button.Sendotp} OnPress={() => props.onSubmit(phoneNumber)} />
       </View>

   </View>
  );
}



export default PhoneNumber