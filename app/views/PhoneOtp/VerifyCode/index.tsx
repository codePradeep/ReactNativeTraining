import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Abutton } from '../../../common';
import Logo from '../../../common/Logo';
import { Constant, FONTS, Screen } from '../../../config';
import styles from './style';
interface otpprops{
  onSubmit: (arg0: string) => void;
   navigation:any
   

}
const OTP=(props:otpprops)=> {

  const {navigation}=props
  const [code, setCode] = useState('');

  return (
      <View style={styles.mainContainer}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View>

                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>{Constant.screens.OTPAuthentication}</Text>
                            <Text style={styles.Subtext}> {Constant.Otp.preEmail} 
                             your Phone number</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <TextInput  style={styles.textinput} keyboardType={"number-pad"} 

                            autoFocus
        value={code}
        onChangeText={setCode}
                            
                            />
                          
                        </View>
                        <View style={styles.btncon}>
                            <Text style={FONTS.h5}> {Constant.Otp.didnotrecive}</Text>
                            <Text style={[FONTS.h4]}>{Constant.Button.Resend}</Text>
                        </View>


                    </View>

                </View>
                <View>
                    <Abutton title={Constant.Button.Continue} OnPress={() => {props.onSubmit(code)}}/>
                    <Text style={styles.Subtext}>{Constant.Otp.detailterm}</Text>
                    <TouchableOpacity>
                        <Text style={styles.term}>{Constant.Button.TnC}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    
  );
}

export default OTP