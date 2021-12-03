import React,{useState} from "react";
import { View,TextInput, Text,Button, Alert} from "react-native";
import RNUpiPayment from 'react-native-upi-payment'

const Upipayment=()=>{

    const [value, setValue] = useState('')

   const successCallback=()=>{
      Alert.alert("SUCCESS")
    }

    const failureCallback=()=>{
      Alert.alert("SORRY TRY NEXT TIME")
    }


   const payment = () => {
      console.log(value)
      RNUpiPayment.initializePayment({
        vpa: '9076735355', 
        payeeName: 'Pradeep Sharma',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn'
      }, successCallback, failureCallback);
   }


    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>WELCOME TO UPI PAYMENT</Text>
  
        <TextInput style={{ borderRadius: 10, borderWidth:2, margin: 20 ,borderColor:"black",width:"80%"}} placeholder='Enter Amount' onChangeText={value => setValue(value)} />
        <Button title="UPI Payment" onPress={payment} />
     </View>
    )
}
export default Upipayment;