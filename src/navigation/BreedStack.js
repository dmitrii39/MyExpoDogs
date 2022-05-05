import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Favourites from './Favourites';

const Stack = createStackNavigator();

export default function BreedsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
}