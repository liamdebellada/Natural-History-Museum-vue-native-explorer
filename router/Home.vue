<template>
  <SafeAreaView class="container">
    <scroll-view class="content-main-scroll" :alwaysBounceVertical="true">
    <view class="img-container">
        <image class="header-image" :source="{uri: 'https://naturalhistorymuseum.github.io/dataportal-docs/images/logo.png'}"/>
    </view>
        <text class="title-text">Popular categories</text>
        <view class="category-container">
          <CategoryCard :navigation="this.props.navigation" v-for="item in data" v-bind:item="item" :key="item.title"></CategoryCard>
        </view>
        <text class="title-text">Pinned content</text>
    </scroll-view>
    <NavBar :navigation="this.props.navigation"></NavBar>
  </SafeAreaView>
</template>

<script>
var requestNhmData = require('../ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';

import NavBar from '../global-components/Navigation.vue'
import CategoryCard from '../global-components/Category.vue'

export default {
  data() {
    return {
        data: [ //remeber specific routes and key layout
          {'title' : 'Dinosaurs', "img" : require('../assets/dino.png'), "navi" : 'DataSets'},
          {'title' : 'Minerals', "img" : require('../assets/minerals.png'), "navi" : 'Details'},
          {'title' : 'Ancient buildings', "img" : require('../assets/dolmen.png'), "navi" : 'Details'}
        ]
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
      NavBar, CategoryCard
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
    margin-bottom: 60;
}

.category-container {
  margin: 20;
}
</style>