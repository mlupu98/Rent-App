import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Icon, Header } from "react-native-elements";

class TakeTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      placeholderText: "",
      isFilled: false,
      textInputValue: "default"
      
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(text) {
    let newTextInputValue = "***" + text;
    this.setState({
      textInputValue: newTextInputValue
    });
  }

  render() {
    return (
      <View style={PageStyles.lightBlueFill}>
        <TextInput placeholder={this.props.placeholderText} />
        console.log("this.state.textInputValue", this.state.textInputValue);
        return (
        <View>
          <TextInput
            onChangeText={this.handleChangeText}
            value={this.state.textInputValue}
          />
        </View>
      </View>
    );
  }
}

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={PageStyles.mainBackground}>
        {/* Header is representative of the white bar with the home and gettign started, can remove later */}
        <Header
          backgroundColor="#fff"
          leftComponent={{ icon: "menu", color: "grey" }}
          centerComponent={{ text: "Getting Started", color: "grey" }}
          rightComponent={{ icon: "home", color: "grey" }}
        />
        <View style={PageStyles.mainComponent}>
          <Text style={PageStyles.title}> Let's get you started! </Text>
          <TakeTextInput placeholderText="What's your number?" />
        </View>
      </View>
    );
  }
}

PageStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mainBackground: {
    backgroundColor: "#fff8ce"
  },
  mainContainer: {
    margin: 12,
    padding: 20,
    width: 350,
    backgroundColor: "white",
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    borderRadius: 10
  },
  lightBlueFill: {
    margin: 10,
    padding: 15,
    backgroundColor: "#ADEBFF",
    borderRadius: 50
  },
  lightOrangeFill: {
    margin: 10,
    padding: 15,
    backgroundColor: "#FFB48A",
    borderRadius: 50
  }
});
