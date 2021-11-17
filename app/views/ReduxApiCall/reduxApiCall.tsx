import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator
} from "react-native";


interface ReduxApicallprop{
    state:object;
    quote:string;
    isLoading:any;
    error:any;
    
}

import * as quoteActions from '../../redux/ThunkApi/app/actions/quoteActions'
import {useDispatch,useSelector} from 'react-redux'



const ReduxAsyncApp = () =>{

    const dispatch = useDispatch();

    const quote= useSelector((state:ReduxApicallprop) => state.quote)
    const isLoading= useSelector((state:ReduxApicallprop) => state.isLoading)
    const error= useSelector((state:ReduxApicallprop) => state.error)
    
        return (
            <View style={styles.container}>
                {isLoading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>{quote}</Text>
                        <Button title="Load Quote" onPress={() => dispatch(quoteActions.loadQuote())} />
                    </View>
                }
            </View>
        );
    }




export default ReduxAsyncApp;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});