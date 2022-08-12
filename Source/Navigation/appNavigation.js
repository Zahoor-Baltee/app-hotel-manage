// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyHomeScreen ,MyLogInScreen,MyProduct,BookingForm,MySingupScreen } from './navScreen';



const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer style={{ backGroundColor:"black"}}>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"white",
          
        },
        headerTintColor:"black"
      }
    }>
        <Stack.Screen name="Singup" component={MySingupScreen} />
        <Stack.Screen name="Login" component={MyLogInScreen} />
        <Stack.Screen name="Home" component={MyHomeScreen} />
        <Stack.Screen name="Product" component={MyProduct} />
        <Stack.Screen name="BookingForm" component={BookingForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;