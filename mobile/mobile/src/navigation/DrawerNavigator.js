import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer} from 'react-navigation-drawer';
import Main from '../pages/Main'

const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Main
    },
});

export default createAppContainer(DrawerNavigator);