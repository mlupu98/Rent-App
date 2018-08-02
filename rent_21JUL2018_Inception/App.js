import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, navigationOptions, tabBarIcon, activeTintColor, TabNavigator } from 'react-navigation';
import {Navigation, Screen, startTabBasedApp} from 'react-native-navigation';
import {Icon} from 'react-native-elements';
import MainNavigatorImpl from './Navigation/NavigationImpl';

class App extends Component {
  render() {
  return <MainNavigatorImpl/>   
  }
}


export default App;






