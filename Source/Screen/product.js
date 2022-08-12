import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const MyProduct = ({navigation, route}) => {
  // console.log(route.params.mydetail);

  const BookingDetail=(e,i)=>{
    navigation.navigate('BookingForm', {mydetail: e});
  }
  return (
    <>
      <ScrollView>
        <View style={Style.proCont}>
          <View style={Style.title}>
            <Text style={{color: 'black', fontSize: 28, fontWeight: '800',textAlign:"center"}}>
              {route.params.mydetail.title}
            </Text>
          </View>
          <View style={Style.images}>
            <Image
              source={{uri: route.params.mydetail.image}}
              style={{height: '90%', marginHorizontal: 12, marginTop: 12}}
            />
          </View>
          <View style={Style.price}>
            <Text style={{color: '#ff206e', fontSize: 36}}>
              ${route.params.mydetail.price}
            </Text>
            <Text style={{color: '#00afb9', fontSize: 36}}>
              {route.params.mydetail.category}
            </Text>
          </View>
          <View style={Style.Disc}>
            <Text style={{color: '#463f3a', fontSize: 16}}>
              {route.params.mydetail.description}
            </Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Icon name="grade" size={30} color="#2ec4b6" />
            <Icon name="grade" size={30} color="#2ec4b6" />
            <Icon name="grade" size={30} color="#2ec4b6" />
            <Icon name="grade" size={30} color="#2ec4b6" />
          </View>
        </View>
        <TouchableOpacity 
        style={Style.buyBtn}
        onPress={()=>BookingDetail()}
        >
          <Text style={{color:"#fff",fontSize:26}}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
const Style = StyleSheet.create({
  proCont: {
    backgroundColor: 'white',
    borderRadius:10,
    height: 600,
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
  title: {
    // backgroundColor:"#e4e5e9",
    height: '14%',
    padding: 20,
    shadowColor: '#000',
  },
  images: {
    height: '50%',
  },
  price: {
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  Disc: {
    marginHorizontal: 10,
    // backgroundColor:"#e4e5e9",
    borderColor: 'black',
    borderRadius: 1,
    height: '20%',
    padding: 5,
    //     shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,

    // elevation: 15,
  },
  buyBtn:{
    height:40,
    backgroundColor:"#00afb9",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    
  }
});
export default MyProduct;
