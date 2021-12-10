import React from 'react'
import { Text, View, FlatList, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { ProgressButton } from '../../common';
import { useOrientation } from '../../config/useOrientation';


import styles from './style'

interface progressprops{
    navigation:any
}

const Progress = (props:progressprops) => {
    const {navigation}=props


    const orientation=useOrientation()

    const ItemSeprator = () => <View style={{
        marginHorizontal:orientation.width*0.004,
        height: orientation.height*0.001,
        width: orientation.width*0.9,
        backgroundColor: "rgba(0,0,0,0.2)",
    }} />
    

    return (

        <ScrollView>

        <View style={{flex:1,}}>
            <Text style={styles(orientation).header}>Graduation Requirments</Text>
            <Text style={styles(orientation).subheader}>Graduation Requirment</Text>
            <View style={styles(orientation).listcontainer}>
               

                <ProgressButton title="Test 2/4" orientation={orientation}  navigation= {navigation}/>
                <ItemSeprator />
                <ProgressButton title="Coaching Circles 4/5" orientation={orientation} navigation= {navigation} />
                <ItemSeprator />
                <ProgressButton title="Coaching Sessions 6/6" orientation={orientation} navigation= {navigation} />
                <ItemSeprator />

            </View>
        </View>
        
        </ScrollView>

    )
}

export default Progress;