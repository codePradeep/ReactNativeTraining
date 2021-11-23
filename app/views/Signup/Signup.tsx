import React, { useState } from 'react';
import { Text, View, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert, Button, } from 'react-native';

import styles from './style';
import Abutton from '../../common/Abutton';
import Input from '../../common/Input';
const image = { uri: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };

import * as Animatable from 'react-native-animatable';



interface Signupeprops {
  [x: string]: any;
  navigation: any
  usernameinput:   (text:string) => void
  emailinpute:  (text:string) => void
  submit: () => void
  re_enterPassword: (text:string) => void
  enterPassword: (text:string) => void
  isValidEmail: boolean
}


const Signup = (props: Signupeprops) => {

  return (


    <ImageBackground source={image} resizeMode="cover" style={styles.ImageBackground}>
      <ScrollView>

        <Animatable.Text animation="fadeIn" iterationCount="infinite" direction="alternate" style={{ color: "white", textAlign: "center", fontSize: 40 }}>WELCOME</Animatable.Text>



        <View style={{ flex: 1, marginHorizontal: 30 }}>


          <View style={styles.boxcontainer}>
            <View style={styles.container}>



              <Text style={{ color: "white", textAlign: "center", fontSize: 18, marginTop: 10, marginBottom: 5 }}>Register Now</Text>





              <Input labelname="User Name"
                inputplaceholder="User Name"
                maxLength={16}
                changeText={props.usernameinput}
                keyboardType="default"
                secureTextEntry={false}
              />

              {props.isValidUser ? null : <Text style={styles.error}> invalid Username </Text>}


              <Input labelname="Email ID"
                inputplaceholder="EX-abc@abc.com"
                maxLength={16}
                changeText={props.emailinpute}
                keyboardType="email-address"
                secureTextEntry={false}
              />

              {props.isValidEmail ? null : <Text style={styles.error}> Invalid Email Id</Text>}


              <Input labelname="Password"
                inputplaceholder="*********"
                maxLength={16}
                changeText={props.enterPassword}
                keyboardType="visible-password"
                secureTextEntry={true}
              />

              {props.isValidPassword ? null : <Text style={styles.error}> Invalid Password:Min 8 characters, at least one letter and one number:</Text>}


              <Input labelname="Re-enter Password"
                inputplaceholder="********"
                maxLength={12}
                changeText={props.re_enterPassword}
                keyboardType="visible-password"
                secureTextEntry={true}
              />

              {props.isPasswordSame ? null : <Text style={styles.error}> Input Same Password</Text>}


              <View style={{ paddingTop: 10 }}>
                <Abutton title="Submit" press={props.submit} />

              </View>

            </View>


          </View>

        </View>


      </ScrollView>

    </ImageBackground>



  );
}

export default Signup