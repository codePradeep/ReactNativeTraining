import React from 'react'
import { Text, View, ScrollView} from 'react-native'
import { ProgressButton } from '../../common';



import styles from './style'

interface progressprops{
    navigation:any
    orientation:{
        isLandscape: boolean;
        width: number;
        height: number;
        scale: number;
        fontScale: number;
    }
}

const Progress = (props:progressprops) => {
    const {navigation,orientation}=props
 

    const ItemSeprator = () => <View style={styles(orientation).ItemSeprator} />   

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