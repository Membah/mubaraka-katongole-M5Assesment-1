import { watchPositionAsync } from 'expo-location';
import * as firebase from 'firebase';
import { Alert } from 'react-native';

export async function registration (name,email,password){
   await firebase.auth().createUserWithPasswordAndEmail(email,password);
   const currentUser = firebase.auth().currentUser;

   const db = firebase.firestore();
   db.collection('user').doc(currentUser.uid).set({
    email: name,
    password:password,
   });
    try {
        
    } catch (error) {
      Alert.alert("There's something".error)  
    }
}