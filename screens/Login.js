import  React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions,SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
  return (

    <SafeAreaView style={styles.container}>
      
      <Text style={styles.welcome}> Welcome Back </Text>
     <Text style={{marginBottom:10,fontSize:18,color: "#fff"}}>  Sign in to continue  </Text>
     <TextInput
     style = {styles.input}
     placeholder=" Enter Your Email"
     value={email}
     name = 'email'
     onChangeText={(email) =>{setEmail(email)}}
     
     />
      <TextInput
     style = {styles.input}
     placeholder="Enter Your Password"
     secureTextEntry={true}
     value={password}
     name = 'password'
     onChangeText={(password) =>{setPassword(password)}}
     />
    <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
            Login
        </Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('SignUp')}>
     <Text style={styles.btnTxt}>
     You don't have an account? Register Here
     </Text>
     </TouchableOpacity>
     </View>
    </SafeAreaView>
 
  ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b8d4',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  welcome: {
    fontSize: 30,
    color: "#fff",
    margin:10,
    textAlign: 'center',
   
  },
  input: {
   width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
   flexDirection: "row",
   justifyContent:"space-between",
   width:"90%"
   },
   userBtn: {
    backgroundColor:"#d500f9",
     padding:15,
     width:"45%",
     margin:15,
     borderRadius:10
    },
    btnTxt: {
        fontSize: 15,
        textAlign:"center",
        fontWeight:'bold'
        
        },
});

export default Login;