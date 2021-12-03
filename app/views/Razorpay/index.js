import React from "react";
import { View, Text,TouchableOpacity} from "react-native";
import styles from "./style";

import RazorpayCheckout from 'react-native-razorpay';

const Razorpay=()=>  {

  const payment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://imgur.com/omNjIT1',
      currency: 'INR',
      key: 'rzp_test_rgnJsKhbkvntw9', // Your api key
      amount: '5000',
      name: 'Pradeep Sharma',
      prefill: {
        email: 'Pradeep.sharma@successive.tech',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      console.log("payment id=>",data.razorpay_payment_id)
      alert(`Success: ${data.razorpay_payment_id}`);
     
    }).catch((error) => {
      console.log("Error",error.code|error.description)
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
                                  }

   
    return(
        <View style={styles.maincontainer}>
            <Text style={styles.paragraph}>RAZORPAY GATEWAY </Text>
            
            <TouchableOpacity
                  onPress={payment}
                  style={styles.container}>
                  <Text style={styles.paragraph} >Razor Payment</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Razorpay;