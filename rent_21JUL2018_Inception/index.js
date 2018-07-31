import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import ListScreen from './all_screens/ListScreen';




export function registerScreens() {
   Navigation.registerComponent('./all_screens.ListScreen', () => ListScreen);
}
