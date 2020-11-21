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
import detailsScreen from './router/Details.vue'
import NavBar from './global-components/Navigation.vue'

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
    Details: {
      screen: detailsScreen,
      navigationOptions: NAV_OPTIONS
    },
    NavBar: {
      screen: NavBar,
      navigationOptions: NAV_OPTIONS
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

const AppNavigator = createAppContainer(StackNavigator);

export default {
  data() {
    return {
      complete: false,
      request: [],
      requestVal: ''
    };
  },
  components: { AppNavigator }
}
</script>