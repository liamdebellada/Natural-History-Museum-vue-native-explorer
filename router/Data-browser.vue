<template>
  <view class="container">
    <scroll-view class="scroll-container">
      <view class="title-container">
        <text class="title-text">Datasets</text>
        <text-input class="input-field" v-model="requestVal" placeholder="Search..." placeholderTextColor="#b4a19d"></text-input>
      </view>
      <view class="browser-container">
        <view class="browser">
          <scroll-view :showsVerticalScrollIndicator="false" class="auto-complete-results">
            <view class="results-wrapper" v-if="resultsPresent">
              <view v-if="!hasTyped" class="not-typed-view">
                <text class="not-typed-text">Results will appear here when you start typing!</text>
              </view>
              <view class="i-view" v-for="key in keys" :key="key">
                <touchable-opacity class="search-result-layout" :on-press="() => getter(key)">
                  <image :style="{height: 20, width: 20, marginRight: 10}" :source="require('../assets/search.png')"/>
                  <text class="i-result">{{key}}</text>
                </touchable-opacity>
              </view>
            </view>
            <view v-else>
              <text class="i-result">No results.</text>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="title-container">
        <text class="title-text">Results:</text>
      </view>
      <view class="result-wrapper">
        <view class="result-container" v-if="complete" v-for="(res, index) in request" :key="res">
          <view class="result">
            <text class="attribute-header">Title</text>
            <text class="attribute-text">{{res.title}}</text>
            <text class="attribute-header">Resource ID</text>
            <text class="attribute-text">{{res.resource_id}}</text>
            <text class="attribute-header">Data</text>
            <touchable-opacity :on-press="() => showData(index)"><text class="attribute-text">{{`\u27A4`}}</text></touchable-opacity>
            <view v-if="res.displayData">
              <view v-for="(item, index) in res.dataRequest" :key="index">
                <view class="data-object-container">
                  <view v-for="(k, v) in item" :key="v">
                      <text class="key">{{`${v}: `}}<text class="item">{{k}}</text></text>
                  </view> 
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <NavBar :navigation="this.props.navigation" v-bind:selected="2"></NavBar>
  </view>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
var requestNhmData = require('../ApiCaller/handle.js')
var reFind = require('../utils/refind.js')

import React from 'react';
import {Text, View} from 'react-native';

export default {
    data() {
        return {
            complete: false,
            request: [],
            requestVal: '',
            test: this.navigation["state"]["params"],
            keys: [],
            resultsPresent: true,
            hasTyped: false
        }
    },
  props: {
    navigation: { type: Object }
  },
  created() {
    this.getter()
  },
  methods: {
    navigateToHome() {
      this.navigation.navigate("Home")
    },
    getData: function(item) {
        return (<View style={{flexDirection: "row", height: 20, backgroundColor: "#5c37b0", margin: 10}}>
          <Text style={{color: '#FFFFFF'}}>{`\u2022 ${item.item.nhmRequestUrl}`}</Text>
          <Text style={{color: '#FFFFFF'}}>{`\u2022 ${item.item.title}`}</Text>
        </View>)
    },
    getter: async function(value) {
      var data = await requestNhmData.getNhmDataSets(value)
      this.request = data
      this.complete = true
    },
    updateSearch: function() {
      this.complete = false
      this.getter(this.requestVal)
      this.requestVal = ''
    },
    showData(index) {
      var update = this.request[index].displayData ? false : true
      this.request[index].displayData = update
    }
  },
  components: {
      NavBar
  },
  watch: {
    requestVal: function(current, previous) {
      if (!this.hasTyped) this.hasTyped = true
      if (current.length > 0) {
        var results = reFind.findKey(current)
        if (results.length < 1) {
          this.resultsPresent = false 
        } else {
          this.resultsPresent = true
          this.keys = results
        }
      } else {
        this.keys = []
      }
    }
  }
}

</script>

<style>
.container {
  background-color: white;
  min-height: 100%;
}
.title-container {
  margin: 20;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.result-wrapper {
  margin-bottom: 100;
}

.not-typed-view {
  width: 100%;
  display: flex;
  align-items: center;
}

.not-typed-text {
  font-size: 20;
  text-align: center;
  color: #8c8c8c;
}

.search-result-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2%;
}

.results-wrapper {
  margin-bottom: 20;
}

.scroll-container {
  padding-top: 30;
}

.title-text {
  color: black;
  font-size: 30;
  font-weight: 500;
  flex-basis: 35%;
}

.browser {
  width: 100%;
  height: 350;
  padding: 10;
}

.browser-container {
  margin: 20;
}

.input-field {
  width: auto;
  height: 35;
  border-radius: 5;
  padding: 10;
  margin-left: 10;
  background-color: #f6f6f6;
  color: black;
  flex-basis: 62%;
}

.auto-complete-results {
  margin-top: 10;
  background-color: #f6f6f6;
  padding: 10;
  border-radius: 15;
}

.i-result {
  color: black;
  font-size: 18;
}

.i-view {
  margin-top: 10;
  overflow: hidden;
}

.result-container {
  margin: 20;
}

.result {
  background-color:#f6f6f6;
  width: 100%;
  min-height: 150;
  height: auto;
  padding: 10;
  border-radius: 15;
}

.attribute-text {
  color: black;
  font-size: 18;
  margin-bottom: 5;
}

.attribute-header {
  color: #b4a19d;
}

.data-object-container {
  background-color:white;
  border-radius: 5;
  padding: 5;
  margin: 5;
}

.key {
  color: #ac34dfcb;
  font-weight: 500;
}

.item {
  color: black;
  font-weight: 200;
}
</style>