import React,{useState} from "react";
import { View,TextInput, Text,Button, Alert} from "react-native";
import RNUpiPayment from 'react-native-upi-payment'
import styles from "./style";

const Upipayment=()=>{

    const [value, setValue] = useState('')
    const [upi, setupi] = useState('')
    const [name, setname] = useState('')

   const successCallback=()=>{
      Alert.alert("SUCCESS")
    }

    const failureCallback=()=>{
      Alert.alert("SORRY TRY NEXT TIME")
    }


   const payment = () => {
      console.log(value)
      console.log(upi)
      
      console.log(name)

      RNUpiPayment.initializePayment({
        vpa: upi, 
        payeeName: name,
        amount: value,
        transactionRef: 'some-hash-string'
      }, successCallback, failureCallback);
   }


    return (
     <View style={styles.Container}>
  
        <Text style={styles.paragraph}>WELCOME TO UPI PAYMENT</Text>
        <TextInput style={styles.textinput} placeholder='Enter User Name' onChangeText={name => setname(name)} />
        <TextInput style={styles.textinput} placeholder='Enter Upi' onChangeText={upi => setupi(upi)} />
        <TextInput style={styles.textinput} placeholder='Enter Amount' onChangeText={value => setValue(value)} />
        <Button title="UPI Payment" onPress={payment} />
     </View>
    )
}
export default Upipayment;