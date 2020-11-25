<template>
    <SafeAreaView class="container">
        <view class="map-container">
            <map-view class="container" :initial-region="coordinates">
                <Marker :coordinate="{latitude: 51.5858233, longitude: -0.0658707}" :onPress="() => createSlideView()">
                    <view class="marker">
                         <text class="marker-text">Ada national college for digital skills</text>
                    </view>
                </Marker>
            </map-view>
            <BottomSheet
            ref="refer"
            :snapPoints="[330, 90]"
            :borderRadius="0"
            :renderContent="renderContent"
            :renderHeader="renderHeader"
            :initialSnap="1"
            :enableGestureInteraction="true"
            />
        </view>
        <NavBar :navigation="this.props.navigation"></NavBar>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
import MapView, {Marker} from "react-native-maps";

import * as React from 'react';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, Text, View, Button } from 'react-native';

const renderContent = () => {
    return (
        <View style={{backgroundColor: 'white', padding: 16, height: 450}}>
            <Text>test</Text>
            <Text>OMG :)</Text>
            <Text>OMG :)</Text>
            <Text>OMG :)</Text>
            <Text>OMG :)</Text>
            <Text>OMG :)</Text>
            <Text>OMG :)</Text>
        </View>
    )
};

const renderHeader = () => {
    return (
        <View style={{backgroundColor: 'red', padding: 16, height: 40, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
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
            renderHeader: renderHeader
        };
    },
    props: {
        navigation: {type: Object}
    },
    components: { NavBar, MapView, Marker, BottomSheet },
    methods: {
        createSlideView() {
            this.$refs.refer.snapTo(0)
        }
    }
}
</script>

<style>
.container {
    background-color: #1f1f1f;
    min-height: 100%;
}
.map-container {
    flex: 1;
}

.marker {
    background-color: #171717;
    min-width: 50;
    width: auto;
    height: 25;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marker-text {
    color: white;
}
</style>