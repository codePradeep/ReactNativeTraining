import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Modal, Pressable, Alert, TextInput, ScrollView } from "react-native";
import { Coursebutton, Input } from "../../common";
import Logo from "../../common/Logo";
import { styles } from "./style";
import {launchCamera, launchImageLibrary,ImagePicker } from 'react-native-image-picker';


// interface loginpageprops {
//     navigation: any
// }



const Profile = (props) => {

    
    const { navigation } = props
    const [isPersonal,setispersonal]=useState(false)
    const [personalname,setpersnalname]=useState("Pradeep")
    const [personallastname,setpersnallastname]=useState("Sharma")
    const [gender,setgender]=useState("Male")
    const [Addreess,setAddress]=useState("abc")
    const [isAddress,setisAddress]=useState(false)
    const [Email,setEmail]=useState("abc@abc.com")
    const [workphone,setworkphone]=useState("")
    const [homephone,sethomephone]=useState("")
    const [isContect,setisContect]=useState(false)

    
    const [modalVisible, setModalVisible] = useState(false);
    const [imageUri, setimageUri] = useState('');
const [imageUriGallary, setimageUriGallary] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');

const openCamara = () => {
  const options = {
  storageOptions: {
  path: 'images',
  mediaType:'photo',
  },
  includeBase64: true,
  };
  
  launchCamera(options, response => {
  console.log( response);
  if (response.didCancel) {
  console.log('‘User cancelled image picker’');
  } else if (response.error) {
  console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
  console.log('User tapped custom button: ', response.customButton);
  } else {
  // You can also display the image using data:
  const source = {uri: 'data:image/jpeg;base64,' + response.base64};
  setimageUri(source);
  }
  });
  };

    const launchLibrary = () => {
    let options = {
      width: 20,
      height: 20,
      resizeMode:"contain",
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
   launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
       const source = { uri: response.assets[0].uri};
     
        console.log('response', JSON.stringify(response.assets[0].uri));
        console.log(source)
        setimageUriGallary(source.uri)
      }
    });

  }




    return (
        <View style={{ flex: 1 }}>




<Modal   animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }} >
                
                <View style={{flex:1}}>
                  <View style={{flex:0.9}}/>
 
                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Coursebutton title="Camera" Press={() =>openCamara()}/>
                                    <Text />
                                    <Coursebutton title="Gallery" Press={() =>launchLibrary()}/>
                                    <Text />
                                    <Coursebutton title="Close" Press={() => setModalVisible(!modalVisible)}/>
                                   
                                </View>
                </View>
                </View>
      </Modal>







            <View style={{  justifyContent: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <TouchableOpacity 
                    onPress={() => setModalVisible(true)}
                    
                    >

                        <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
                            <Logo source={{uri:imageUriGallary}} />
                            <Image source={require('../../assets/camera.png')} style={{ height: 50, width: 40, resizeMode: "contain", position: "absolute", alignSelf: "center" }} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "900", }}>Pradeep Kumar Sharma</Text>
                        <Text style={{ fontSize: 15, fontWeight: "500", }}>pradeep.sharma@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 2, width: 5000, backgroundColor: "rgba(0,0,0,0.2)", }} />
<ScrollView>

            <View style={{borderWidth:1 ,marginHorizontal:40,marginVertical:20}}> 
                 <View style={{marginHorizontal:20,marginVertical:20}}>
                      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{fontSize:22,color:"black"}}>Personal Information</Text>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setispersonal(true)} >
                                  <Text>Edit</Text>
                                  
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setispersonal(false)} >
                                  <Text>Save</Text>
                                  
                                </TouchableOpacity>
                      </View>
                     
                      <Text style={styles.Textheader}>First Name</Text>
                     { isPersonal ? <TextInput onChangeText={text=>setpersnalname(text)}/> :<Text style={styles.Text}>{personalname}</Text> }
                      
                      <Text style={styles.Textheader}>Last Name</Text>
                      { isPersonal ? <TextInput onChangeText={text=>setpersnallastname(text)}/> :<Text style={styles.Text}>{personallastname}</Text> }
                     
                      <Text style={styles.Textheader}>Gender</Text>
                      { isPersonal ? <TextInput onChangeText={text=>setgender(text)}/> :<Text style={styles.Text}>{gender}</Text> }
              </View>
                      
            </View>

            <View style={{borderWidth:1 ,marginHorizontal:40,marginVertical:20}}> 
                 <View style={{marginHorizontal:20,marginVertical:20}}>
                      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{fontSize:22,color:"black"}}>Contact</Text>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setisContect(true)} >
                                  <Text>Edit</Text>
                                  
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setisContect(false)} >
                                  <Text>Save</Text>
                                  
                                </TouchableOpacity>
                      </View>
                     
                      <Text style={styles.Textheader}>Email</Text>
                     { isContect ? <TextInput onChangeText={text=>setEmail(text)}/> :<Text style={styles.Text}>{Email}</Text> }
                      
                      <Text style={styles.Textheader}>Home Phone</Text>
                      { isContect ? <TextInput onChangeText={text=>sethomephone(text)}/> :<Text style={styles.Text}>{homephone}</Text> }
                     
                      <Text style={styles.Textheader}>Work Phone</Text>
                      { isContect ? <TextInput onChangeText={text=>setworkphone(text)}/> :<Text style={styles.Text}>{workphone}</Text> }
              </View>
                      
            </View>
            <View style={{borderWidth:1 ,marginHorizontal:40,marginVertical:20}}> 
                 <View style={{marginHorizontal:20,marginVertical:20}}>
                      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{fontSize:22,color:"black"}}>Mailing Address</Text>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setisAddress(true)} >
                                  <Text>Edit</Text>
                                  
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"skyblue"}}
                                onPress={()=>setisAddress(false)} >
                                  <Text>Save</Text>
                                  
                                </TouchableOpacity>
                      </View>
                     
                      <Text style={styles.Textheader}>Addreess</Text>
                     { isAddress ? <TextInput onChangeText={text=>setAddress(text)} style={{backgroundColor:"skyblue"}}/> :<Text style={styles.Text}>{Addreess}</Text> }
                      
                      
              </View>
                      
            </View>









</ScrollView>








        </View>
    )
}
export default Profile;
