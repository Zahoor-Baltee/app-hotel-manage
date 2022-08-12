import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';

function BookingForm(navigation, route) {
  const [name, setName] = useState(null);
  const [place, setPlace] = useState(null);
  const [contact, setContact] = useState(null);
  const [ondate, setOndate] = useState(null);
  const [leftdate, setLeftdate] = useState(null);
  const [numberofg, setNumberofg] = useState(null);
  // const [room, setRoom] = useState(null);
  // const [rup, setRup] = useState(null);
  // const [hname, setHname] = useState(null);

  const DataPush = () => {
    const obj = {
      name,
      place,
      contact,
      ondate,
      leftdate,
      numberofg,
    };
    let postListRef = database().ref('guest');
    let newPostRef = postListRef.push();
    newPostRef.set({
      obj,
    });
    
  };

  return (
    <>
      <View style={Styles.Container}>
        {/* <View>
        <Text style={{color:"red", textAlign:"center",fontSize:26}}>Booking Detail</Text>
      </View> */}
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="Enter Name"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setName(e)}
          />
        </View>
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="Enter place"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setPlace(e)}
          />
        </View>
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="Enter Contact"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setContact(e)}
          />
        </View>
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="Enter Arrival"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setOndate(e)}
          />
        </View>
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="Enter Leave"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setLeftdate(e)}
          />
        </View>
        <View>
          <TextInput
            style={Styles.Screen3inp1}
            placeholder="No Of Guest"
            placeholderTextColor="#adb5bd"
            onChangeText={e => setNumberofg(e)}
          />
        </View>
        <View style={{marginTop: 32}}>
          <TouchableOpacity onPress={DataPush} style={Styles.Screen3btns}>
            <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    // shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,

    // elevation: 15,
  },
  Screen3header: {
    paddingTop: 60,
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
  Screen3inp1: {
    border: 'none',
    borderColor: '#2591d9',
    borderWidth: 2,
    marginTop: 30,
    marginHorizontal: 30,
    color: 'black',
    fontSize: 18,
    borderRadius: 10,
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
    borderRadius: 10,
    marginHorizontal: 100,
    paddingVertical: 8,
  },
});

export default BookingForm;
