import React from "react";
import { View, Text,Button} from "react-native";
import PayPal from 'react-native-paypal-gateway';
const DemoPaypal=()=>{
   
  PayPal.initialize(PayPal.SANDBOX, "ARq0A1WhXxm6GXQ9CDM8YZiUmgwjmcRiSh4zLw2HwHjvrfCu6lpymvtkJYATd0rxLa5-DCUVuv33v5cb");
PayPal.pay({
  price: '40.70',
  currency: 'USD',
  description: 'Your description goes here',

}).then(confirm => console.log(confirm))
  .catch(error => console.log(error));
   
    return(
        <View>
            <Text>this paypal integration </Text>
           {/* <Button title=" go to Home" onPress={() => )}/> */}
        </View>
    )
}
export default DemoPaypal;