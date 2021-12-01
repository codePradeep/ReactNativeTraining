import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Button,
    Text,
    View
} from 'react-native';
import stripe from 'tipsi-stripe'
const StripApp = () => {
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState<any |null>(null)
    stripe.setOptions({
        publishableKey: 'pk_test_51K1p4QSC2xHxmy5GccHTAcJy7BSdmXemYcrEKKsdJnITlNEOtStBM7KVglFSZJv2TNsWXKVVTb2xi8004ng90fMU004Qt90Tce',
    })
    const handleCardPayPress = async () => {
        // const options = {}
        try {
            setLoading(true)
            const token = await stripe.paymentRequestWithCardForm()
            console.log('Token from Card ', token)
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.log('handleCardPayPress Error ', error)
            setLoading(false)
        }
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>
                    Card Form Example
                </Text>
                <Text style={styles.instruction}>
                    Click button to show Card Form dialog.
                </Text>
                <Button
                    title="Enter you card and pay"
                    onPress={handleCardPayPress}
                 />
                <View style={styles.token}>
                    {token &&
                    <Text style={styles.instruction}>
                        Token: {token.id}
                    </Text>
                    }
                </View>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    token: {
        height: 20,
    },
});
export default StripApp;
