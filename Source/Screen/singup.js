import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
function MySingupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SignUpIn = () => {
    let obj = {
      email,
      password,
    };
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
        setEmail('')
    setPassword('')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const GoLogIn=()=>{
    navigation.navigate('Login');
  }
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          display: 'flex',
        }}>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3heading}>SignUp</Text>
        </View>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3text}>
            Please Enter Your Email And Password
          </Text>
        </View>
        <View style={Styles.Screen3main}>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Name"
              placeholderTextColor="#adb5bd"
            />
          </View>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Email"
              placeholderTextColor="#adb5bd"
              onChangeText={e => setEmail(e)}
            />
          </View>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Password"
              placeholderTextColor="#adb5bd"
              secureTextEntry={true}
              onChangeText={e => setPassword(e)}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: '30%'}}>
            <Text style={Styles.Screen3forgetText}>Already Have Account</Text>
            <TouchableOpacity onPress={GoLogIn} style={{marginTop: 24, marginLeft: 5}}>
              <Text style={{color: '#2591d9', fontSize: 16}}>LogIn</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={SignUpIn} style={Styles.Screen3btns}>
              <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}></View>
        </View>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
  Screen3header: {
    paddingTop: 20,
    // height:100,
  },
  Screen3heading: {
    textAlign: 'center',
    fontSize: 36,
    color: 'black',
  },
  Screen3text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  Screen3main: {
    // height:"60%",
    width: '100%',
    // backgroundColor:"green"
  },
  Screen3inp1: {
    border: 'none',
    borderColor: '#2591d9',
    borderWidth: 2,
    marginTop: 30,
    marginHorizontal: 30,
    color: 'black',
    fontSize: 18,
    borderRadius: 40,
    padding: 12,
    textAlign: 'center',
  },
  Screen3forgetText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 22,
    marginBottom: 22,
  },
  Screen3btns: {
    border: 'none',
    borderWidth: 1,
    borderColor: '#38b000',
    borderRadius: 40,
    marginHorizontal: 100,
    paddingVertical: 8,
  },
});

export default MySingupScreen;
