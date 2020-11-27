<template>
    <SafeAreaView class="container">
        <view class="map-container">
            <map-view class="container" :initial-region="coordinates">
                <Marker v-if="requestFinished" v-for="(item, index) in dataPoints" :key="index" :coordinate="{latitude: item.lat, longitude: item.long}" :onPress="() => createSlideView(item)">
                    <view class="marker">
                         <image :source="{uri: `${item.url}`}" class="marker-img"/>
                    </view>
                </Marker>
            </map-view>
            <BottomSheet
            ref="refer"
            :snapPoints="[660, 330, 90]"
            :borderRadius="0"
            :renderContent="renderContent"
            :renderHeader="renderHeader"
            :initialSnap="2"
            :enableGestureInteraction="true"
            :enabledInnerScrolling="false"
            />
        </view>
        <NavBar :navigation="this.props.navigation"></NavBar>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
import MapView, {Marker} from "react-native-maps";

var requestNhmData = require('../ApiCaller/handle.js')

import * as React from 'react';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, Text, View, Button } from 'react-native';

import SheetView from '../global-components/Sheet.vue'

var data = {
    taxonomy: "Tap an item on the map to get started."
}
var renderContent = () => {
    return (
        <View style={{backgroundColor: 'white', height: 1000}}>
            <SheetView item={data}/>
        </View>
    )
};

const renderHeader = () => {
    return (
        <View style={{backgroundColor: 'white', padding: 16, height: 40, borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: "#525252", height: 15, width: 70, borderRadius: 30}}></View>
        </View>
    )
}

export default {
    data: function() {
        return {
            coordinates: {
                latitude: 51.5858233,
                longitude: -0.0658707,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            renderContent: renderContent,
            renderHeader: renderHeader,
            requestFinished: false,
            dataPoints: []
        };
    },
    props: {
        navigation: {type: Object}
    },
    created() {
        this.dataGetter()
    },
    components: { NavBar, MapView, Marker, BottomSheet },
    methods: {
        createSlideView(selected) {
            this.$refs.refer.snapTo(1)
            data = selected
            this.$refs.refer.forceUpdate()
        },
        dataGetter: async function() {
            var data = await requestNhmData.getDataStore('5955e890-3530-49a8-8042-cacca80d7f49')
            this.dataPoints = data
            this.requestFinished = true
        }
    }
}
</script>

<style>
.container {
    background-color: #1f1f1f;
    min-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.map-container {
    flex: 1;
}

.marker {
    background-color: #171717;
    min-width: 65;
    width: auto;
    height: 65;
    border-radius: 50;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marker-text {
    color: white;
}

.marker-img {
    height: 50;
    width: 50;
    border-radius: 15;
}
</style>