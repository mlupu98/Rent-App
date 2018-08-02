import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
//import StartScreen from './StartScreen';

export default class SettingsScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}

