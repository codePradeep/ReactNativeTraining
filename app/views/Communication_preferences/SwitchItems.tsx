import React from "react";
import { Switch, Text, View } from "react-native";
import { styles } from "./style";

const Switchitem=()=>{
    return(
        <View style={styles(orientation).conatainer}>
                <Text style={styles.text}>Voice Messages</Text>
                {isEnabled? <Text style={styles.enablemessage}>Active</Text>:<Text style={styles.enablemessage}>Inactive</Text> }  
                <Switch
                    trackColor={{ false: "gray", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "blue" : "white"}
                    
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
    )

}
export default Switchitem