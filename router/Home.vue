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
            </view>
                <view class="horizontal-card-container">
                  <scroll-view :horizontal="true" :showsHorizontalScrollIndicator="false" class="scrolling-card-container">
                    <view v-for="(card, index) in cards" :key="index" class="horizontal-card" :style="{marginRight: cardDetection(index)}">
                      <touchable-opacity class="card-layout">
                        <image :style="{height: 110, width: 80, borderRadius: 15}" :source="{uri: card.img}"/>
                        <view class="card-text-container">
                          <view class="contain-text">
                            <text class="card-text">{{card.title}}</text>
                          </view>
                          <view class="flex-container">
                            <view class="sub-element">
                              <text class="star-text">{{`\u2605 5.0`}}</text>
                            </view>
                            <view class="sub-element">
                              <text class="star-text">{{`\u2691 EN`}}</text>
                            </view>
                          </view>
                        </view>
                      </touchable-opacity>
                    </view>
                  </scroll-view>
                </view>
          </LinearGradient>
        </view>
        <text class="title-text">Popular categories</text>
        <view class="category-container">
          <CategoryCard :navigation="this.props.navigation" v-for="item in data" v-bind:item="item" :key="item.title"></CategoryCard>
        </view>
        <text class="title-text">Pinned content</text>
    </scroll-view>
    <NavBar :navigation="this.props.navigation" v-bind:selected="selectedIndex"></NavBar>
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
        cards: [
          {
            img: 'https://www.museumnext.com/wp-content/uploads/2020/01/natural_history_Museum.jpg',
            title: 'The world of dinos!'
          },
          { 
            img: 'https://images.unsplash.com/photo-1580135952467-a4ff3ca4a752?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
            title: 'Our rocky world.'
          },
          {
            img: 'https://www.museumnext.com/wp-content/uploads/2020/01/natural_history_Museum.jpg',
            title: 'Other content goes here'
          },
          {
            img: 'https://www.museumnext.com/wp-content/uploads/2020/01/natural_history_Museum.jpg',
            title: 'New title here!'
          }
        ],
        greetingMessage: '',
        selectedIndex: this.navigation["state"]["params"]
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
        this.navigation.navigate("Details");
    },
    cardDetection(i) {
      return i == this.cards.length - 1 ? 30 : 0
    }
  },
  components: {
      NavBar, CategoryCard, LinearGradient
  }
}
</script>

<style>
.container {
  background-color: white;
  min-height: 100%;
}
.title-text {
    color: black;
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
    margin-top: 60;
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

.horizontal-card-container {
  width: 100%;
  height: 140;
}
.horizontal-card {
  height: 100%;
  width: 210;
  background-color: white;
  border-radius: 20;
  margin-left: 30;
}

.red-container {
  background-color: red;
}

.card-layout {
  margin: 15;
  display: flex;
  flex-direction: row;
}

.card-text {
  margin-left: 10;
  margin-top: 5;
  font-size: 18;
  font-weight: 600;
  width: 60%;
}
.sub-element {
  height: 15;
  min-width: 40;
  width: auto;
  background-color: #ac34df54;
  margin: 5;
  border-radius: 5;
  display: flex;
  justify-content: center;
}

.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100;
  margin: 10;
  margin-left: 5;
  position: absolute;
  bottom: -5;
}

.star-text {
  color: #000000;
  font-size: 11;
  padding-left: 3;
}

.contain-text {
  width: 85%;
  height: auto;
}
</style>