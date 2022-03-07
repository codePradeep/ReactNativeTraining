import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

interface SearchScreenprops {
    navigation: any
    fromtext: string
    setfromtext: (text: string) => void
    desinationtext: string
    setdestinationtext: (text: string) => void
}
const SearchScreen = (props: SearchScreenprops) => {
    const { navigation, fromtext, desinationtext, setdestinationtext, setfromtext } = props
    const apikey = "AIzaSyBrbJ0c-12lV1yF9F4z1yx9myye4rDrxY0"

    return (
        <SafeAreaView style={styles.MainContainer}>
            <TextInput
                placeholder="EnterPickupPoint"
                style={styles.textinput}
                value={fromtext}
                onChangeText={setfromtext}

            />
            <TextInput
                placeholder="Whare to?"
                style={styles.textinput}
                value={desinationtext}
                onChangeText={setdestinationtext}

            />
            <View >
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    styles={{
                      textInputContainer: {
                        backgroundColor: 'blue',
                      },
                      textInput: {
                        height: 38,
                        color: 'red',
                        fontSize: 16,
                      },
                      predefinedPlacesDescription: {
                        color: 'green',
                      },
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when 
                        // fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: apikey,
                        language: 'en',
                    }}
                />
      
                
            </View>

        </SafeAreaView>
    )
}

export default SearchScreen

