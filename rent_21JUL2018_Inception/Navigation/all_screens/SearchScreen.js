import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


//search screen shouldnt be an actual screen
export default class SearchScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Icon name="home"/>
          <Button
            title="Go to Profile"
            onPress={() => this.props.navigation.push('Profile')}
          />
        </View>
      );
    }
  }