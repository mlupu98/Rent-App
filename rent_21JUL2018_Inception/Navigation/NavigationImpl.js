import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import StartScreen from "./all_screens/StartScreen";
import PermanentTabs from "./PermanentRoutes";
import SearchTabs from "./SearchRoutes";

const MainNavigatorImpl = createStackNavigator(
    {
        StartTabs:{
            screen: SearchTabs,
            navigationOptions:{
                headerTitle: "Search",


            }
        },
        PermanentTabs:{
            screen: PermanentTabs,
            navigationOptions:{
                headerTitle: "Home", //if null then header is gone
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