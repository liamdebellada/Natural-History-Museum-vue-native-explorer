<template> 
  <SafeAreaView class="container">
    <view class="container-2">
        <view class="red-container">
          <text class="text-color-primary">Data returned</text>
              <flat-list
              v-if="complete"
                :data="request"
                :render-item="(item) => getData(item)"
              />
        </view>

        <view class="blue-container">
              <text-input
              class="input-style"
              :style="{borderColor: 'gray', borderWidth: 1}"
              v-model="requestVal"/>
              <touchable-opacity class="submit" :on-press="updateSearch">
                <text>Search</text>
              </touchable-opacity>
        </view>
    </view>
  </SafeAreaView>
</template>

<script>
var requestNhmData = require('./ApiCaller/handle.js')
import React from 'react';
import {Text, View} from 'react-native';

export default {
  data() {
    return {
      complete: false,
      request: [],
      requestVal: ''
    };
  },
  created() {
    this.getter()
  },
  methods: {
      getData: function(item) {
        return (<View style={{flexDirection: "row", height: 20, backgroundColor: "#5c37b0", margin: 10}}>
          <Text style={{color: '#FFFFFF'}}>{item.item.title}</Text>
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
  margin-top: 10;
  background-color: #0f0f0f;
  border-radius: 8px;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-2 {
  height: 100%;
  margin: 10px;
}
.input-style {
  height: 40;
  width: 90%;
  color: white;
  background-color: #262626;
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
