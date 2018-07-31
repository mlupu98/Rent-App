import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import StartScreen from "./all_screens/StartScreen";
import MainNavigator from "./Routes";


const MainNavigatorImpl = createStackNavigator(
    {
        Start:{
            screen: StartScreen,
            navigationOptions:{
                headerTitle: "Home",

            }
        },
        PermanentTabs:{
            screen: MainNavigator,
            navigationOptions:{

            }
        }
    },
    {
        initialRouteName: "PermanentTabs",
        navigationOptions: {

        }
    }
)

export default MainNavigatorImpl;