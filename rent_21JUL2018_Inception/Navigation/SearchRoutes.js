import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom, createStackNavigator, tabBarBottom, createMaterialTopTabNavigator } from "react-navigation";
import FindHomeScreen from "./all_screens/FindHomeScreen";
import JustForYouScreen from "./all_screens/JustForYouScreen";
import HotPicksScreen from "./all_screens/HotPicksScreen";


const FindHomeTab = createStackNavigator(
    {
        Settings: {
            screen: FindHomeScreen,
            navigationOptions:{

            }
        }
    },
    {
        navigationOptions:
        {

        }
    }
)

const JustForYou = createStackNavigator(
    {
        Settings: {
            screen: JustForYouScreen,
            navigationOptions:{

            }
        },
    },
    {
        navigationOptions:
        {

        }
    }
)

const HotPicksTab = createStackNavigator(
    {
        Settings: {
            screen: HotPicksScreen,
            navigationOptions:{

            }
        },
    },
    {
        navigationOptions:
        {

        }
    }
) 

const SearchTabs = createMaterialTopTabNavigator(
    {
        "Find Home": FindHomeScreen,
        "Just For You": JustForYouScreen,
        "Hot Picks": HotPicksScreen
    },
    {
        initialRouteName: "Find Home", //this will be the last search screen you were on
        navigationOptions: ({ navigation }) => {
            const { routeName, routes } = navigation.state;
            let params = routes && routes [1] && routes[1].params;
            return {
                tabBarIcon: ({foused, tintColor}) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    switch(routeName)
                    {
                        case "FindHome":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "JustForYou":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "HotPicks":
                        iconName = `ios-megaphone${focused ? '' : '-outline'}`;break;
                    }
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                }
            }
        }
    }
)

export default SearchTabs;