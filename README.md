
# Steps for Google Map Integration in Rect native Project

### Process First is to install the react-native-maps Library

# Installation

Install the library from npm:

```sh
npm install react-native-maps --save-exact
```

The actual map implementation depends on the platform. On Android, one has to use [Google Maps](https://developers.google.com/maps/documentation/), which in turn requires you to obtain an [API key for the Android SDK](https://developers.google.com/maps/documentation/android-sdk/signup).

> **WARNING**: Before you can start using the Google Maps Platform APIs and SDKs, you must sign up and create a [billing account](https://developers.google.com/maps/gmp-get-started#create-billing-account)!

---

## Build configuration on Android

Ensure your build files match the following requirements:

**If you do _not_ have _project-wide properties_ defined and have a different play-services version than the one included in this library, use the following instead (switch 17.0.0 and/or 17.2.1 for the desired versions):**

```groovy
...
dependencies {
   ...
   implementation(project(':react-native-maps')){
       exclude group: 'com.google.android.gms', module: 'play-services-base'
       exclude group: 'com.google.android.gms', module: 'play-services-maps'
   }
   implementation 'com.google.android.gms:play-services-base:17.2.1'
   implementation 'com.google.android.gms:play-services-maps:17.0.0'
}
```

2. **Specify your Google Maps API key:**

Add your API key to your manifest file (`android/app/src/main/AndroidManifest.xml`):

```xml
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <!-- You will also only need to add this uses-library tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

Source: https://developers.google.com/maps/documentation/android-api/signup

3. **Ensure that you have Google Play Services installed:**

- For the Genymotion emulator, you can follow [these instructions](https://www.genymotion.com/help/desktop/faq/#google-play-services).
- For a physical device you need to search on Google for 'Google Play
  Services'. There will be a link that takes you to the Play Store and
  from there you will see a button to update it (do not search within the
  Play Store).

That's it, you made it! :+1:

---

## Troubleshooting

### The map background is blank (Google Maps)

If google logo/markers/polylines etc are displayed but the map
background is otherwise blank, this is likely an API key issue. Verify
your API keys and their restrictions. Ensure the native `provideAPIKey`
call is the first line of `didFinishLaunchingWithOptions`.

Ensure also that the relevant Google APIs have been enabled for your
project from the URLs below:

- [Google Maps SDK Android](https://console.developers.google.com/apis/library/maps-android-backend.googleapis.com/)
- [Google Maps SDK iOS (if required)](https://console.developers.google.com/apis/library/maps-ios-backend.googleapis.com)

For reference, you may read the relevant issue reports: ([#118](https://github.com/react-native-maps/react-native-maps/issues/118), [#176](https://github.com/react-native-maps/react-native-maps/issues/176), [#684](https://github.com/react-native-maps/react-native-maps/issues/684)).

### The map background is gray (Google Maps)

If you get grey screen on android device create google_maps_api.xml in android/app/src/main/res/values.

```xml
<resources>
  <string name="google_maps_key" templateMergeStrategy="preserve" translatable="false">(api key here)</string>
</resources>
```

### No map whatsoever

Ensure the map component and its container have viewport dimensions. An
example is below:

```jsx
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
...
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
```


### Clearing caches

Run these commands to clean caches

```sh
watchman watch-del-all
npm cache clean

# Android, if you encounter `com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim`, then clear build folder.
cd android
./gradlew clean
cd ..
```

### When using Android studio

Make sure your Android studio is up to date and set up following the [React Native docs](https://reactnative.dev/docs/environment-setup).

In particular, the following packages have to be installed:

- Extras / Google Play services
- Extras / Google Repository
- Android 6.0 (API 23) / Google APIs Intel x86 Atom System Image Rev. 19
- Android SDK Build-tools 23.0.3

### No native module found exception on Android

Be sure to have `new MapsPackage()` in your `MainApplication.java` :

```java
import com.airbnb.android.react.maps.MapsPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new MapsPackage()
        );
    }
```

### Android emulator issues

- When starting Android emulator, make sure you have enabled `Wipe user data`.
- If you are using Android Virtual Devices (AVD), ensure that `Use Host GPU` is checked in the settings for your virtual device.
- If using an emulator and the only thing that shows up on the screen is
  the message: `[APPNAME] won't run without Google Play services which are not supported by your device.`, you need to change the emulator
  CPU/ABI setting to a system image that includes Google APIs. These may
  need to be downloaded from the Android SDK Manager first.

