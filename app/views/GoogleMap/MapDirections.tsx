import React,{useState} from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView, { Polyline } from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import MapViewDirections from 'react-native-maps-directions';
  
const  MapDirections =()=>{
    const [coordinates] = useState([
        {
            latitude: 28.5995001, longitude: 77.3315623 
        },
        {
            latitude: 28.6001765, longitude: 77.3424825 
        },
      ]);

    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={true}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 28.5995001,   
            longitude: 77.3315623,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
  
          <Marker  
            coordinate={coordinates[0]}  
            title={"Successive Technologies"}  
            description={" Successive Technologies"}  
            pinColor="skyblue"
            opacity= {1}
          />  
        <Marker  
            coordinate={coordinates[1]}  
            title={"Shiv mandir"}  
            opacity= {1}
          />

          // For This You Must Enable Billing on the Google Cloud Project 
          <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"insert your API Key here"} 
          strokeWidth={4}
          strokeColor="#111111"
        />

        </MapView>  
          
      </View>  
    );  
  }  
  


  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  
export default MapDirections;
