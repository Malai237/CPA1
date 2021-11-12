import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button } from 'react-native';
import MainPage from './components/MainPage';
// import ProfileRow from './components/ProfileRow';
import VideoCall from './components/VideoCall'
import HorizontalProfile from './components/HorizontalProfile'
import SettingsPage from './components/SettingsPage';
import ValueProvider from './ValueContext';

const Stack = createNativeStackNavigator();


export default function App() {
  const data = {name:"" }
  return (
    <ValueProvider value = {data}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name = "main"
          component = {HomeScreen}
          options={{title: 'Main Page AskAlumni'}}
          />

            <Stack.Screen name = "Main Page" component={MainPage} />
            <Stack.Screen name = "Online Alumni" component={HorizontalProfile} />
            <Stack.Screen name = "Settings" component={SettingsPage} />
            <Stack.Screen name = "Video Call" component={VideoCall} />


        </Stack.Navigator>

    </NavigationContainer>
  </ValueProvider>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row',
                      flexWrap:'wrap',
                      // margin:"25%",
                      // border:"thick solid black",
                      padding:5,
                      justifyContent: 'space-around',
                    }}>
          <Button
            title="Main Page"
            onPress={() =>
              navigation.navigate('Main Page')
            }
          />
          <Button
            title="Online Alumni"
            onPress={() =>
              navigation.navigate('Online Alumni')
            }
          />

          <Button
            title="Checkout the Preferences!!"
            onPress={() =>
              navigation.navigate('Settings')
            }
          />
          <Button
            title="Video Call"
            onPress={() =>
              navigation.navigate('Video Call')
            }
          />
      </View>
      <MainPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'stretch',
    // justifyContent: 'center',
  },
});
