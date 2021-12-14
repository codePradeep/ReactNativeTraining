import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Logo from "../Logo";


const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  
  return (

    <View style={{ flex: 1,
        justifyContent: "center",
        alignItems: "center",}}>
    <Modal  animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}} >
                
                <View style={{backgroundColor: 'rgba(0, 0, 255, 0.1)',flex:1,}}>
 
                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Logo/>
                                    <Text style={styles.modalText}> this is Modal 
                                    </Text>
                                    <Pressable style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)} >
                                            
                                            <Text style={styles.textStyle}>Hide Modal</Text>

                                    </Pressable>
                                </View>
                </View>
                </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    

  },
  modalView: {
    margin: 20,
    backgroundColor: "white", 
    padding: 60,
    alignItems: "center",
    justifyContent:"center",
    borderRadius:20,
    opacity: 1,
  },


  button: {
    padding: 10, 

  },

  buttonOpen: {backgroundColor: "skyblue" ,borderRadius:20, },
  
  buttonClose:
   {
    backgroundColor: "gray",borderRadius:20,
   },
  textStyle:
   {
    color: "white",
    textAlign: "center"
   },

  modalText:
   {
    marginBottom: 18,
    textAlign: "center"
   }
});

export default Popup;