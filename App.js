
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/Splash'
import LoginScreen from './screens/Login'
import SignUpScreen from './screens/SignUp'
import HomeScreen from './screens/Home/Home'
import Detail from './screens/Home/Details'

export * as firebase from 'firebase';
 if (firebase.app.length){
  console.log("firebase is connect");
  firebase.initializeApp(firebaseConfig)
 }

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen}  options= {{title: 'Splash Screen '}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options= {{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options= {{title: 'Welcome To Best Services '}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options= {{title: 'SignUp Screen '}}/>
        <Stack.Screen name="Detail" component={Detail} options= {{title: 'Service Page'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyStack;
