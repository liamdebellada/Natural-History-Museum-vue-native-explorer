<template>
  <SafeAreaView class="container">
    <view class="container-2">
      <view class="blue-container">
        <text-input
        class="input-style"
        v-model="requestVal"/>
        <touchable-opacity class="submit" :on-press="updateSearch">
          <text>Search</text>
        </touchable-opacity>
      </view>
        <view class="red-container">
          <text class="text-color-primary">Data returned</text>
              <flat-list
              v-if="complete"
                :data="request"
                :render-item="(item) => getData(item)"
                :keyExtractor="(item, index) => index.toString()"
              />
        </view>
    </view>
    <NavBar :navigation="this.props.navigation"></NavBar>
  </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
var requestNhmData = require('../ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';
export default {
    data() {
        return {
            complete: false,
            request: [],
            requestVal: '',
            test: this.navigation["state"]["params"]
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
          <Text style={{color: '#FFFFFF'}}>{item.item.nhmRequestUrl}</Text>
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
.text-color-primary {
  color: white;
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
}
.red-container {
  background-color: #0f0f0f;
  border-radius: 8px;
  height: 50%;
  min-width: 100%;
}
.blue-container {
  margin-bottom: 10;
  background-color: #0f0f0f;
  border-radius: 8px;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-2 {
  height: auto;
  margin: 10px;
}
.input-style {
  height: 40;
  width: 90%;
  color: white;
  background-color: #262626;
  border-radius: 5px;
  padding: 5px;
  /* border-color: red;
  border-width: 1; */
}
.submit {
  margin-top: 30px;
  background-color: #5c37b0;
  height: 30;
  width: 15%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>