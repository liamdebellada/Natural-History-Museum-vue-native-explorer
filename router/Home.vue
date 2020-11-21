<template>
  <SafeAreaView class="container">
    <scroll-view class="content-main-scroll">
    <view class="img-container">
        <image class="header-image" :source="{uri: 'https://naturalhistorymuseum.github.io/dataportal-docs/images/logo.png'}"/>
    </view>
        <text class="title-text">Popular categories</text>
    </scroll-view>
    <NavBar :navigation="this.props.navigation"></NavBar>
  </SafeAreaView>
</template>

<script>
var requestNhmData = require('../ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';

import NavBar from '../global-components/Navigation.vue'

export default {
  data() {
    return {
        data: ''
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
      goToDetailsScreen() {
        this.navigation.navigate("Details", {"test" : "done"});
    }
  },
  components: {
      NavBar
  }
}
</script>

<style>
.container {
  background-color: #1f1f1f;
  min-height: 100%;
}
.title-text {
    color: white;
    font-size: 24px;
    font-weight: 500;
    padding-left: 20;
}

.img-container {
    width: auto;
}

.header-image {
    height: 200;
    width: 424;
}

.content-main-scroll {
    height: 50;
}
</style>