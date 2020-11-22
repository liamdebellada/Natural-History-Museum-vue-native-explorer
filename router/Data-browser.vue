<template>
  <SafeAreaView class="container">
    <scroll-view class="scroll-container">
      <view class="title-container">
        <text class="title-text">Datasets</text>
      </view>
      <view class="browser-container">
        <view class="browser">
          <text-input class="input-field" v-model="requestVal" placeholder="Search..." placeholderTextColor="#b4a19d"></text-input>
          <scroll-view class="auto-complete-results">
            <view v-if="resultsPresent">
              <view class="i-view" v-for="key in keys" :key="key">
                <touchable-opacity :on-press="() => getter(key)">
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
    </scroll-view>
    <NavBar :navigation="this.props.navigation"></NavBar>
  </SafeAreaView>
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
            resultsPresent: true
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
  background-color: #1f1f1f;
  min-height: 100%;
}
.title-container {
  margin: 20;
}

.scroll-container {
  margin-bottom: 50;
}

.title-text {
  color: white;
  font-size: 30;
  font-weight: 500;
}

.browser {
  width: 100%;
  height: 350;
  background-color: #0f0f0f;
  padding: 10;
}

.browser-container {
  margin: 20;
}

.input-field {
  width: 100%;
  height: 50;
  border-radius: 5;
  padding: 10;
  background-color: #171717;
  color: white;
}

.auto-complete-results {
  margin-top: 10;
  background-color: #171717;
  padding: 10;
}

.i-result {
  color: white;
  font-size: 18;
}

.i-view {
  background-color: #2e2e2e;
  margin-top: 10;
}

.result-container {
  margin: 20;
}

.result {
  background-color: #0f0f0f;
  width: 100%;
  min-height: 150;
  height: auto;
  padding: 10;
}

.attribute-text {
  color: white;
  font-size: 18;
  margin-bottom: 5;
}

.attribute-header {
  color: #b4a19d;
}

.data-object-container {
  background-color:#2e2e2e;
  padding: 5;
  margin: 5;
}

.key {
  color: #b4a19d;
  font-weight: 500;
}

.item {
  color: white;
  font-weight: 200;
}
</style>