import React from "react";
import { View, Text, Image, TouchableOpacity, Modal, TextInput, ScrollView, TouchableWithoutFeedback } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Logo from "../../common/Logo";
import { styles } from "./style";




interface Profileprops {
  Data: any
  setData: any
  imageUriGallary: string
  setimageUriGallary: (value: string) => void
  openCamara: () => void
  launchLibrary: () => void
  modalVisible: boolean
  setModalVisible: (value: boolean) => void
  isAddress: boolean
  setisAddress: (value: boolean) => void
  isContect: boolean
  setisContect: (value: boolean) => void
  isPersonal: boolean
  setispersonal: (value: boolean) => void
}



const Profile = (props: Profileprops) => {


  const { 
    Data,
    setData,
    isPersonal,
    setispersonal,
    isContect,
    setisContect,
    isAddress,
    setisAddress,
    modalVisible,
    setModalVisible,
    imageUriGallary,
    setimageUriGallary,
    openCamara,
    launchLibrary } = props




  return (
    <View style={{ flex: 1 }}>

      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }} >
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
               <View style={styles.centeredView} />
               
            </TouchableWithoutFeedback>
         

            <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/exit.png')} style={styles.modalimage1}  />
              <Text style={styles.modaltext}>Cancel</Text>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={() => openCamara()}>

              <Image source={require('../../assets/camera-icon.png')} style={styles.modalCameraimage1} />
              <Text style={styles.modaltext}>Camera</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => launchLibrary()} >
              <Image source={require('../../assets/artgallery.png')} style={styles.modalCameraimage1}  />
              <Text style={styles.modaltext}>Gallery</Text>
              </TouchableOpacity>
             
             
            </View>    
           
      </Modal>

      <View style={styles.headercontiner}>
        <View style={styles.Headersubcontainer}>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}

          >

            <View style={styles.imageView}>
              <Logo source={{ uri: imageUriGallary }} />
              <Image source={require('../../assets/camera.png')} style={styles.Camera} />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headername}>{Data.fname} {Data.lastname}</Text>
            <Text style={styles.headerEmail}>{Data.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      
      

 <ScrollView >
   

        <View style={styles.conatainer}>
          <View style={styles.boxContainer}>
            <View style={styles.innerBoxContainer}>
              <Text style={styles.mainHeading}>Personal Information</Text>

              {!isPersonal ?
                <TouchableOpacity
                  onPress={() => setispersonal(true)} >
                  <Text style={styles.editandsave}>Edit</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                  onPress={() => setispersonal(false)} >
                  <Text style={styles.editandsave}>Save</Text>

                </TouchableOpacity>}
            </View>

            <Text style={styles.Textheader}>First Name</Text>
            <TextInput
              onChangeText={text => setData({ ...Data, fname: text })}
              value={Data.fname}
              style={styles.InputText}
              editable={isPersonal} />

            <Text style={styles.Textheader}>Last Name</Text>
            <TextInput onChangeText={text => setData({ ...Data, lastname: text })}
              value={Data.lastname}
              style={styles.InputText}
              editable={isPersonal} />

            <Text style={styles.Textheader}>Gender</Text>
            <TextInput onChangeText={text => setData({ ...Data, gender: text })}
              value={Data.gender}
              style={styles.InputText}
              editable={isPersonal} />
          </View>

        </View>

        <View style={styles.conatainer}>
          <View style={styles.boxContainer}>
            <View style={styles.innerBoxContainer}>
              <Text style={styles.mainHeading}>Contact</Text>
              {!isContect ? <TouchableOpacity
                onPress={() => setisContect(true)} >
                <Text style={styles.editandsave}>Edit</Text>

              </TouchableOpacity> :
                <TouchableOpacity
                  onPress={() => setisContect(false)} >
                  <Text style={styles.editandsave}>Save</Text>
                </TouchableOpacity>}
            </View>

            <Text style={styles.Textheader}>Email</Text>
            <TextInput onChangeText={text => setData({ ...Data, email: text })}
              value={Data.email}
              keyboardType={"email-address"}
              style={styles.InputText}
              editable={isContect} />

            <Text style={styles.Textheader}>Home Phone</Text>
            <TextInput onChangeText={text => setData({ ...Data, homephone: text })}
              value={Data.homephone}
              keyboardType={"number-pad"}
              style={styles.InputText}
              editable={isContect} />

            <Text style={styles.Textheader}>Work Phone</Text>
            <TextInput onChangeText={text => setData({ ...Data, workphone: text })}
              value={Data.workphone}
              keyboardType={"number-pad"}
              style={styles.InputText}
              editable={isContect} />
          </View>

        </View>
        <View style={styles.conatainer}>
          <View style={styles.boxContainer}>
            <View style={styles.innerBoxContainer}>
              <Text style={styles.mainHeading}>Mailing Address</Text>
              {!isAddress ? <TouchableOpacity
                onPress={() => setisAddress(true)} >
                <Text style={styles.editandsave}>Edit</Text>

              </TouchableOpacity> :
                <TouchableOpacity
                  onPress={() => setisAddress(false)} >
                  <Text style={styles.editandsave}>Save</Text>

                </TouchableOpacity>}
            </View>

            <Text style={styles.Textheader}>Addreess</Text>
            <TextInput onChangeText={text => setData({ ...Data, address: text })}
              value={Data.address}
              style={styles.InputText}
              editable={isAddress}
            />

{/* <GooglePlacesAutocomplete

placeholder='Address'

onPress={(data, details = null) => {
  // 'details' is provided when fetchDetails = {true}
  console.log(data, details);
}}
onFail={(error) => console.error(error)}


query={{
  key: 'AIzaSyD1T1y62SWmsQ0HeFRakjti7t1h5n18SBs',
  language: 'en',
}}
/> */}




          </View>

        </View>
        <Text />

      </ScrollView>
      

   

    </View>
  )
}
export default Profile;
