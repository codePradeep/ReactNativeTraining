import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Text, View ,TouchableOpacity} from 'react-native';

import styles from "./style";

interface counterprops{
    state:any;
    counter:any;
}


const Counterdemo = () =>{
    
    

    const dispatch = useDispatch();
    const counter= useSelector((state:counterprops) => state.counter)
    
    
    return(
        <View style={styles.Container}>
        <View style={styles.childcontainer}>

        <Text style={styles.paragraph} >{counter}</Text>

            <TouchableOpacity onPress={() => dispatch({type:'INCREASE_COUNTER',payload:1})}>
                <Text >Increase</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => dispatch({type:'DECREASE_COUNTER'})}>
                <Text>Decrease</Text>
            </TouchableOpacity>
        </View>
    </View>
        
           )
  
  }


  
  export default Counterdemo;