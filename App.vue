<template> 
  <app-navigator></app-navigator>
</template>

<script>
var requestNhmData = require('./ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';

import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import homeScreen from './router/Home.vue'
import datasetScreen from './router/Data-browser.vue'
import recommendedScreen from './router/Recommended.vue'
import mapScreen from './router/Map.vue'
import settingsScreen from './router/Settings.vue'
import articleScreen from './router/Article.vue'

const NAV_OPTIONS = {
  header: null,
  animationEnabled: false
}


const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: NAV_OPTIONS
    },
    DataSets: {
      screen: datasetScreen,
      navigationOptions: NAV_OPTIONS
    },
    Recommended: {
      screen: recommendedScreen,
      navigationOptions: NAV_OPTIONS
    },
    Map: {
      screen: mapScreen,
      navigationOptions: NAV_OPTIONS
    },
    Settings: {
      screen: settingsScreen,
      navigationOptions: NAV_OPTIONS
    },
    Article: {
      screen: articleScreen,
      navigationOptions: NAV_OPTIONS,
    }
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled:false,
    transitionConfig: () => ({
      transitionSpec: {
        duration:0
      }
    })
  },
);
console.disableYellowBox = true;
const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>