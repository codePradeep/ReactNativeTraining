import React, { useState } from "react";
import Profile from "../views/Profile";
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from "react-native";
import SettingsPage from "../views/Settings";


// interface ProfileModelprops{
//     navigation:any
//     source:string
// }

const data={
  fname:"Pradeep",lastname:"Sharma",gender:"male",email:"Pradeep@gmail.com",workphone:"",homephone:"",address:""
}

const ProfileModel=(props)=>{

    const {navigation}=props
    const [Data,setData]=useState(data)
    const [isPersonal,setispersonal]=useState(false)
    const [isAddress,setisAddress]=useState(false)
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
  // const source = {uri: 'data:image/jpeg;base64,' + response.base64};
  // console.log("camerauri",source.uri)
  // setimageUriGallary(source.uri);


  const source = { uri: response.assets[0].uri};
     
  console.log('response', JSON.stringify(response.assets[0].uri));
  console.log(source)
  setimageUriGallary(source.uri)
  setModalVisible(false)
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
        setModalVisible(false)
      }
    });

  }





    return(
        <Profile 
        navigation={navigation} 
        Data={Data}
        setData={setData}
        isPersonal={isPersonal}
        setispersonal={setispersonal}
        isAddress={isAddress}
        setisAddress={setisAddress}
        isContect={isContect}
        setisContect={setisContect}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imageUri ={imageUri }
        setimageUri={setimageUri}
        imageUriGallary={imageUriGallary}
        setimageUriGallary={setimageUriGallary}
        openCamara={openCamara}
        launchLibrary={launchLibrary}
        
        
        />

    )
}
export default ProfileModel