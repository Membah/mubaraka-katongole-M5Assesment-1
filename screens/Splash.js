import React, { Component } from 'react'
import { View, Text, StyleSheet,} from 'react-native'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate('Login')
        },2000 )
    return(
      <View style={styles.container}>
        
        <Text style={{fontSize: 20, color:"#fff"}}>
          Just a SplashScreen
        </Text>
        

      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#008080',
   
  }
});
export default Splash;