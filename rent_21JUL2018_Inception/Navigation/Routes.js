import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom, createStackNavigator, tabBarBottom, createMaterialTopTabNavigator } from "react-navigation";
import HomeScreen from "./all_screens/HomeScreen";
import ProfileScreen from "./all_screens/ProfileScreen";
import SettingsScreen from "./all_screens/SettingsScreen";

const HomeTab = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {

            }
        }
    },
    {
        navigationOptions: {

        }
    }
)


// const RootStack = createStackNavigator(
//     {
//       Home: HomeScreen,
//       Details: DetailsScreen,
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );



const ProfileTab = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationsOptions:{

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
        Home: HomeScreen,
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Settings",
        navigationOptions: ({ navigation }) => {
            const { routeName, routes } = navigation.state;
            let params = routes && routes [1] && routes[1].params;
            return {
                tabBarIcon: ({foused, tintColor}) => {
                    const { routeName } = navigation.state;
                    let iconName;
                   /* switch(routeName)
                    {
                        case "Home":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "Settings":
                        iconName = `ios-people${focused ? '' : '-outline'}`;break;
                        case "Profile":
                        iconName = `ios-megaphone${focused ? '' : '-outline'}`;break;
                    }*/
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
   
                }
            }
        }
    }
)

export default PermanentTabs;