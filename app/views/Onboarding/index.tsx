import React, { useRef,useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { icon, Screen } from "../../config";
import styles from "./style";

interface Onboardingprops {
    navigation: any
}

const Onborading = (props: Onboardingprops) => {
    
    const { navigation } = props
   
      
        const pagerRef = useRef<any|null>(null);
        const handlePageChange =( pageNumber:any) => {
          pagerRef.current.setPage(pageNumber);
        };
       
        
    return (


        <PagerView style={styles.pagerview} initialPage={0} ref={pagerRef} >
          
            <View key="1" style={styles.FirstView} >
                <View style={styles.maincontainer}>
                    <Image source={icon.mainlogo} style={styles.image} />

                    <Text style={styles.heading}>Choose a Favourite Food</Text>
                    <Text style={styles.subheading}>when you oder Eat treet,we'll hook you up with exclusive coupon,specials and rewards</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.skipbutton}
                                        onPress={()=>handlePageChange(2)}

                    >
                        <Text style={styles.skiptext}>Skip</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                     onPress={()=>handlePageChange(1)}
                     >
                        <Text style={styles.buttontext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            <View key="2" style={styles.FirstView} >
                <View style={styles.maincontainer}>
                    <Image source={icon.mainlogo2} style={styles.image} />

                    <Text style={styles.heading}>Hot Delivery to Home</Text>
                    <Text style={styles.subheading}>We Make food ordering fast,simple and free-no matter if you order online or cash</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.skipbutton}
                    onPress={()=>handlePageChange(2)}
                    >
                        <Text style={styles.skiptext}>Skip</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>handlePageChange(2)}
                    >
                        <Text style={styles.buttontext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
           
            <View key="3" style={styles.FirstView} >
                <View style={styles.maincontainer}>
                    <Image source={icon.mainlogo3} style={styles.image} />

                    <Text style={styles.heading}>Receive the Great Food</Text>
                    <Text style={styles.subheading}>You'll receive the great food within a hour. And get free Delivery Credits for every order</Text>
                </View>
                <View style={styles.lastbuttoncontainer}>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>navigation.navigate(Screen.SignInModel)}>
                        <Text style={styles.endbuttontext}>Let's Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </PagerView>


    )
}
export default Onborading
