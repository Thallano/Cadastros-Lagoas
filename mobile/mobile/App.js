import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
//import SettingsScreen from './src/navigation/DrawerNavigator'
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
  <>
      <StatusBar barStyle = "light-content" backgroundColor= "#00AFEF" />
      <Routes/>
    </>
  );
}