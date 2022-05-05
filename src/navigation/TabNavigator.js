import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Favourites from '../../Favourites';
import JustAnyScreen from '../../JustAnyScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="JustAnyScreen" component={JustAnyScreen} />
    </Tab.Navigator>
  );
}
