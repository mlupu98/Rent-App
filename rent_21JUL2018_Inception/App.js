import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, navigationOptions, tabBarIcon, activeTintColor, TabNavigator } from 'react-navigation';
import {Navigation, Screen, startTabBasedApp} from 'react-native-navigation';
import {Icon} from 'react-native-elements';
import MainNavigatorImpl from './Navigation/NavigationImpl';
import HomeScreen from "./Navigation/all_screens/HomeScreen";

/*function registerScreens() {
  Navigation.registerComponent('Rent_21JUL2018_INCEPTION.all_screens.Start', () => StartScreen);
}*/

/*const App = () => (
  <View>
    <TestNav/>
  </View>
)*/

class App extends Component {
  render() {
  return <MainNavigatorImpl/>   
  }
}

/*const tabs = [{
  label: 'Navigation',
  screen: 'example.Types.ListScreen',
  title: 'Navigation Types',
}];*/

const TestNav = createMaterialTopTabNavigator(
  {
    Home:
    {
      screen: HomeScreen,
    }
  },
  {
    initialRouteName: "Home"
  }
)

export default App;



/*Navigation.startTabBasedApp({
  tabs: 
  [
    {
      label: 'Start',
      screen: 'StartScreen',
      title: 'Home title',
    }
  ],
   passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down', // optional, add transition animation to root change: 'none',
})*/

/*export const Tabs = createMaterialTopTabNavigator(
  {
    Home:
    {
      screen: HomeScreen,
    },
    Profile:
    {
      screen: ProfileScreen,
    },
    Settings:
    {
      screen: SettingsScreen,
    },
    Start:
    {
      screen: StartScreen,
    }*/
   /* HotPicks:
    {
      screen: HotPicksScreen,
    },
    FindHome:
    {
      screen: FindHomeScreen,
    },
    JustForYou:
    {
      screen: JustForYouScreen,
    },*/
  //},
  /*
    {
    initialRouteName: 'Start',
    },*/
  //);



