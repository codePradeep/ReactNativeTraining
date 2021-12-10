import  React from 'react';

import { Text, View, Button, ScrollView, FlatList } from 'react-native';
import { useOrientation } from '../../config/useOrientation';
import RanderListItem from './RanderListItem';
import styles from './style';

const  Details=()=> {
    const orientation=useOrientation();

    
    const DATA = [
        {
            id: "1",
            title: "Opening Soon",
        
        },
        {
            id: "2",
            title: "Opening Soon",
          
        },
        {
            id: "3",
            title: "Opening Soon",
          
        },
        {
            id: "4",
            title: "Opening Soon",
          
        },
    ]





  
  return (
    <ScrollView horizontal={false}>
    <ScrollView horizontal={true}>
    
          <View style={{flex:1}}>
          <View style={{}}>
              <Text style={{fontSize:12,alignSelf:"center"}}>HEALTH COACH TRAINING PROGRAM</Text>
              <Text style={{fontSize:22,alignSelf:"center",color:"black"}}>Graduation Requirenments</Text>
             <View style={{marginLeft:20,marginTop:9}}>
              <Text style={{fontSize:22,color:"black"}}>Test Results</Text>
              <Text>2/4 reuired to grduate</Text>
              <Text style={{fontSize:22,color:"black"}}>Course</Text>
              <Text>Health Coach Training Program </Text>
              <Text style={{fontSize:22,color:"black"}}>Student</Text>
              <Text>Pradeep Sharma</Text>
            </View> 

          </View>
          <View style={{}}>
   
            <View style={styles(orientation).maincontainer}>
                <FlatList
                    nestedScrollEnabled ={false}
                    
                    showsVerticalScrollIndicator={false}
                   // pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                  //  legacyImplementation={false}
                    data={DATA}
                    initialScrollIndex={0}
                 //  ItemSeparatorComponent={ItemSeprator}
                    renderItem={({ item ,index }) => <RanderListItem  item={item} orientation={orientation} index={0}/> }
                    keyExtractor={(_,index )=> index.toString()}
                /> 
            </View>

            </View>

     </View>

     </ScrollView>
     </ScrollView>
   

       
  );
}

export default Details;

