import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  KeyBoard
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
      value: "",
      placeholderText: "",
      buttonFill: false,
    };
    // Have to bind functions inside Components.
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.changeContainerColor = this.changeContainerColor.bind(this);
  }
  handleOnChangeText = (text) => {
    // Store updated text into value. You will not see this change until all the states are set.
    this.setState({ value: text });
    // Evaluate if text is empty. If not empty, fill box blue. 
    if (text != "")
      this.setState({ buttonFill: true }); 
    else 
      this.setState({ buttonFill: false });
    // Update button fill.
    this.changeContainerColor(this.buttonFill);
  }
  changeContainerColor = (val) => {
    if (val == 1) 
      return (PageStyles.lightBlueFill);
    else 
      return (PageStyles.lightOrangeFill);
  }
  render() {
    return (
      <View style={[PageStyles.textInputBubble, this.changeContainerColor(this.state.buttonFill)]}>
        <TextInput placeholder={this.props.placeholderText}
        onChangeText={this.handleOnChangeText} />
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
          <TakeTextInput ref="username" placeholderText="What's your number?" />
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
  textInputBubble: {
    margin: 10,
    padding: 15,
    borderRadius: 50
  },
  lightBlueFill: {
    backgroundColor: "#ADEBFF",
  },
  lightOrangeFill: {
    backgroundColor: "#FFB48A",
  }
});
