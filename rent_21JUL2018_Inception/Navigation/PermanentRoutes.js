import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom, createStackNavigator, tabBarBottom, createMaterialTopTabNavigator } from "react-navigation";
import SearchScreen from "./all_screens/SearchScreen";
import ProfileScreen from "./all_screens/ProfileScreen";
import SettingsScreen from "./all_screens/SettingsScreen";
import HotPicksScreen from "./all_screens/HotPicksScreen";
import JustForYouScreen from "./all_screens/JustForYouScreen";
import SearchTabs from "./SearchRoutes";


const SearchTab = createStackNavigator(
    {
        Home: {
            screen: SearchTabs,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        navigationOptions: {

        }
    }
)


const ProfileTab = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        navigationOptions:{

        }
    }
)

const SettingsTab = createStackNavigator(
    {
        Settings: {
            screen: SettingsScreen,
            navigationOptions:{
                header: null,
            }
        }
    },
    {
        navigationOptions: {

        }
    }
)

const PermanentTabs = createMaterialTopTabNavigator(
    {
        Setting: SettingsTab,
        Search: SearchTab,//maybe call function to display the second nav bar
        Profile: ProfileTab,
    },
    {
        initialRouteName: "Search",
        navigationOptions: ({ navigation }) => {
            const { routeName, routes } = navigation.state;
            let params = routes && routes [1] && routes[1].params;
            return {
                tabBarIcon: ({foused, tintColor}) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    switch(routeName)
                    {
                        case "Home":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "Setting":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "Profile":
                        iconName = `ios-megaphone${focused ? '' : '-outline'}`;break;
                    }
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
   
                }
            }
        }
    }
)

export default PermanentTabs;