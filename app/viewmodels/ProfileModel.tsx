import React,{useState} from "react";
import ProfileScreen from "../views/Profile";
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from "react-native";
interface profilemodelprops{
    navigation:any
}
const ProfileModel =(props:profilemodelprops)=>{
    const {navigation}=props

    const [visible,setvisibe]=useState(false)
    const [render, setrender] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    
    // const dispatch = useDispatch();
    //    const Profilepic= useSelector(state => state.profile)
    //    const Userdata= useSelector(state => state.Data)
    //   console.log("pic",Profilepic)
    
    const [imageUriGallary, setimageUriGallary] = useState<string | undefined>('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
 
const openCamara = () => {
  const options:any = {
  storageOptions: {
  path: 'images',
  mediaType:'photo',
  },
  includeBase64: true,
  };
  
  launchCamera(options, (response:any) => {
  console.log( response);
  if (response.didCancel) {
  console.log('hello');
  } else if (response.error) {
  console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
  console.log('User tapped custom button: ', response.customButton);
  } else {
  const source = { uri: response.assets[0].uri};
  setimageUriGallary(source.uri)
  setModalVisible(false)
  }
  });
  };

  const launchLibrary = () => {
    let options:any = {
      width: 20,
      height: 20,
      resizeMode:"contain",
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
   launchImageLibrary(options, (response:any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
       const source = { uri: response.assets[0].uri};
       
        setimageUriGallary(source.uri)
        setModalVisible(false)
      }
    });

  }




    return(
        <ProfileScreen
            navigation={navigation}
            visible={visible} setvisibe={undefined}  
            setrender ={setrender}
            render ={render}  
            modalVisible={modalVisible} 
            setModalVisible = {setModalVisible}
            launchLibrary={launchLibrary}
            openCamara={openCamara}
            imageUriGallary={imageUriGallary}
         />
    )
}
export default ProfileModel;