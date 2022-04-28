import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Favourites from "./Favourites";
import JustAnyScreen from "./JustAnyScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="JustAnyScreen" component={JustAnyScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer headerShown={false}>
      <MyTabs />
    </NavigationContainer>
  );
}

//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

//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 20.04


//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