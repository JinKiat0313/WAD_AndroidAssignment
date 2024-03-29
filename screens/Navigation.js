import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TouchableHighlight, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen";

const navigator = createStackNavigator(
  {
    //shows the most top as default screen
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
        headerShown: true,
      }
    },
  },
);

export default createAppContainer(navigator);