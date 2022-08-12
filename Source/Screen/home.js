import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Hotels from '../Components/apidata';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
// import {useRoute} from '@react-navigation/native';
// import axios from 'axios';
function MyHomeScreen({navigation, route}) {
  const [mydata, setMydata] = useState([]);
  // const [detail, setDetail] = useState([]);
  // navigation.navigate("login")

  const AllProduct = (e, i) => {                                             
    // setDetail(e, i);
    navigation.navigate('Product', {mydetail: e}); 
  };

  useEffect(() => {
      setMydata(Hotels);
  }, []);
  // console.log(route.params)

  return (
    <>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{route.params.email} </Text>
      </View> */}
      <View style={Style.avtr}>
        <Text style={{color: 'white', fontSize: 36}}>
          {route.params.email[0]}
        </Text>
      </View>
      <ScrollView>
        {mydata.map((e, i) => (
          <TouchableOpacity
            key={i}
            style={Style.container}
            onPress={() => AllProduct(e, i)}>
            <View style={{height: '10%'}}></View>
            <View style={Style.boxImages}>
              <Image
                source={{uri: e.image}}
                style={{height: '100%', marginHorizontal: 16, marginTop: 10}}
              />
            </View>
            {/* <View style={Style.category}>
              <Text style={Style.boxText2}>{e.category}</Text>
            </View> */}
            <View style={Style.title}>
              <Text style={Style.boxText3}>{e.title}</Text>
            </View>
            <View style={Style.cardbg}>
              <Text style={Style.boxText}>${e.price}</Text>
            </View>
            <View style={Style.icons}>
              <Icon name="grade" size={30} color="#2ec4b6" />
              <Icon name="grade" size={30} color="#2ec4b6" />
              <Icon name="grade" size={30} color="#2ec4b6" />
              <Icon name="grade" size={30} color="#2ec4b6" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const Style = StyleSheet.create({
  container: {
    // borderColor:"#000",
    // borderWidth:1,
    borderRadius:15,
    backgroundColor: 'white',
    height: 350,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  avtr: {
    marginTop: 2,
    height: 50,
    width: 60,
    // borderRadius:40,
    borderBottomRightRadius:40, 
    backgroundColor: '#2ec4b6',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  boxImages: {
    height: '40%',
  },
  boxText: {
    color: '#ff206e',
    fontSize: 36,
    marginLeft: 20,
    marginTop: 10,
  },
  boxText2: {
    color: '#343a40',
    fontSize: 29,

    marginTop: 10,
  },
  boxText3: {
    color: '#343a40',
    fontSize: 30,

    marginTop: 10,
  },
  cardbg: {
    // backgroundColor: '#fff',
    height: '20%',
    marginHorizontal: 12,
    
    alignItems: 'center',
  },
  // category:{
  //   height: '10%',
  //   alignItems: 'center',
    
  // },
  title:{
    height: '20%',
    alignItems: 'center',
    paddingTop:10,
    
  },
  icons: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default MyHomeScreen;
