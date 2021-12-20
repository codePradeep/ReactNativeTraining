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
    <ScrollView 
    horizontal={false} 
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
    <ScrollView horizontal={true} >
    
          <View style={{flex:1}}>
          <View style={{}}>
              <Text style={styles(orientation).Heading}>HEALTH COACH TRAINING PROGRAM</Text>
              <Text style={styles(orientation).SubTextHeading}>Graduation Requirenments</Text>
             <View style={styles(orientation).TextContainer}>
              <Text style={styles(orientation).Textheading}>Test Results</Text>
              <Text style={styles(orientation).Text}>2/4 reuired to grduate</Text>
              <Text style={styles(orientation).Textheading}>Course</Text>
              <Text style={styles(orientation).Text}>Health Coach Training Program </Text>
              <Text style={styles(orientation).Textheading}>Student</Text>
              <Text style={styles(orientation).Text}>Pradeep Sharma</Text>
            </View> 

          </View>
          <View style={{}}>
   
            <View style={styles(orientation).maincontainer}>
                <FlatList
                    nestedScrollEnabled ={false}
                    
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // pagingEnabled={true}
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

