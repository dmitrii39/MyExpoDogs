import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Favorites from './Favorites';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer headerShown = {false}>
      <MyStack />
    </NavigationContainer>


  );
}




//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



//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 20.04
