import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View,StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
function MyLogInScreen({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const UserLogIn=()=>{
  let obj={
    email,
    password
  }
  auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    navigation.navigate("Home", {email:email,password:password})
    setEmail('')
    setPassword('')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  }); 
}
const GoSignIn=()=>{
  navigation.navigate("Singup")
}


  return (
    <>
      <View style={{height: "100%", justifyContent:"space-evenly", width:"100%", backgroundColor: '#fff'}}>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3heading}>LogIn</Text>
        </View>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3text}>
            Please Enter Your Login And Password
          </Text>
        </View>
        <View style={Styles.Screen3main}>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Email"
              placeholderTextColor="#adb5bd"
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Password"
              placeholderTextColor="#adb5bd"
              secureTextEntry={true}
              onChangeText={(e) => setPassword(e)}
              />
          </View>
          <View>
            <Text style={Styles.Screen3forgetText}>Forget Password?</Text>
          </View>
          <View>
            <TouchableOpacity onPress={UserLogIn} style={Styles.Screen3btns}>
              <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 24,
              marginHorizontal:'33%'
            }}>
              <Text style={{color:"black"}}>Don't Have Account</Text>
              <TouchableOpacity onPress={GoSignIn} style={{ marginLeft: 5}}>
              <Text style={{color: '#2591d9', fontSize: 16}}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
    Screen3header:{
        paddingTop:20,
        // height:100,
      },
      Screen3heading:{
        textAlign:"center",
        fontSize:36,
        color:"black"
      },
      Screen3text:{
        textAlign:"center",
        fontSize:18,
        color:"black"
      },
      Screen3main:{
        height:"60%",
        // backgroundColor:"green"
      },
      Screen3inp1:{
        border:"none",
       borderColor:"#2591d9",
       borderWidth:2,
        marginTop:20,
        marginHorizontal:30,
        color: "black",
        fontSize:18,
        borderRadius:40,
        padding:12,
        textAlign:"center",
    
      },
      Screen3forgetText:{
        color:"black",
        textAlign:'center',
        fontSize:18, 
        marginTop:22,
        marginBottom:22
        
      },
      Screen3btns:{
        border:"none",
        borderWidth:1,
        borderColor:"#38b000",
        borderRadius:40,
        marginHorizontal:100,
        paddingVertical:8
      },
})
export default MyLogInScreen