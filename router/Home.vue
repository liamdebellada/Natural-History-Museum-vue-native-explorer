<template>
  <view class="container">
    <scroll-view class="content-main-scroll" :alwaysBounceVertical="true">
        <view :style="{borderBottomLeftRadius: 50, backgroundColor: 'red', overflow: 'hidden'}" class="header-gradient-wrapper">
          <LinearGradient
            :colors="['#171717', '#482e5e', '#ab34df']"
            class="header-gradient-container"
            :start="[0, 0]"
            :end="[1, 1]">
            <view class="header-content-area">
                <view class="welcome-image">
                  <text class="title-text-header">{{`${greetingMessage}.`}}</text>
                  <image class="small-logo" :source="require('../assets/NHM-logo.png')"/>
                </view>
                <text class="title-text-header-sub">Discover</text>
                <text class="description-text">Star browsing to learn more...</text>
                <text class="description-text-2">Version: 1.0.0 - Debug</text>
            </view>
          </LinearGradient>
        </view>
        <text class="title-text">Popular categories</text>
        <view class="category-container">
          <CategoryCard :navigation="this.props.navigation" v-for="item in data" v-bind:item="item" :key="item.title"></CategoryCard>
        </view>
        <text class="title-text">Pinned content</text>
    </scroll-view>
    <NavBar :navigation="this.props.navigation"></NavBar>
  </view>
</template>

<script>
var requestNhmData = require('../ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';

import NavBar from '../global-components/Navigation.vue'
import CategoryCard from '../global-components/Category.vue'

import { LinearGradient } from 'expo-linear-gradient';

export default {
  data() {
    return {
        data: [ //remeber specific routes and key layout
          {'title' : 'Dinosaurs', "img" : require('../assets/dino.png'), "navi" : 'DataSets'},
          {'title' : 'Minerals', "img" : require('../assets/minerals.png'), "navi" : 'Details'},
          {'title' : 'Ancient buildings', "img" : require('../assets/dolmen.png'), "navi" : 'Details'}
        ],
        greetingMessage: ''
    };
  },
  created() {
    var time = new Date().getHours()
    this.greetingMessage = (time < 12 ? 'Good morning' : time >= 12 && time < 18 ? 'Good afternoon' : 'Good Evening')
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
      NavBar, CategoryCard, LinearGradient
  }
}
</script>

<style>
.container {
  background-color: #121212;
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

.category-container {
  margin: 20;
}

.header-gradient-container {
  height: 700;
  padding-top: 300;
} 

.header-gradient-wrapper {
    top: -300;
    margin-bottom: -280;
}

.header-content-area {
  margin-top: 60;
  margin: 10;
}

.title-text-header {
  font-size: 25;
  color: white;
  margin: 5;
  margin-left: 20;
  font-weight: 500;
}

.title-text-header-sub {
    margin: 5;
    margin-left: 20;
    margin-top: 80;
    font-weight: 400;
    font-size: 40;
    color: white;
}

.description-text {
  margin: 5;
  margin-left: 20;
  color: white;
}

.description-text-2 {
    margin: 5;
    margin-left: 20;
    color: white;
    margin-top: 90;
}

.welcome-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20;
}

.small-logo {
  height: 30;
  width: 25;
  margin-right: 15;
  margin-left: auto;
}
</style>