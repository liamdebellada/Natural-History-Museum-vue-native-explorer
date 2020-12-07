<template>
    <SafeAreaView class="container">
    <status-bar
    background-color="white"
    bar-style="dark-content"
    />
    <scroll-view>
        <view class="title-container">
            <text class="title-text">Settings</text>
            <text class="title-text" :style="{fontSize: 22, marginTop: 30}">General</text>
            <view>
                <view v-for="(item, index) in general" :key="index" class="general-settings-panel">
                    <text class="setting-label">{{item.setting}}</text>
                    <switch class="switch" :on-value-change="(val) => changeSetting(val, index, general, item.process)" :value="item.value"/>
                </view>
            </view>
            <text class="title-text" :style="{fontSize: 22, marginTop: 30}">Acessibility</text>
            <view>
                <view v-for="(item, index) in acessibility" :key="index" class="general-settings-panel">
                    <text class="setting-label">{{item.setting}}</text>
                    <switch class="switch" :on-value-change="(val) => changeSetting(val, index, acessibility, item.process)" :value="item.value"/>
                </view>
            </view>
            <text class="title-text" :style="{fontSize: 22, marginTop: 30, paddingBottom: 5}">About</text>
            <view v-for="(value, k) in about" :key="k" class="about-view">
                <view class="about-item"><text class="about-text-key">{{k}}</text></view>
                <view class="about-item"><text class="about-text-value">{{value}}</text></view>
            </view>
        </view>
    </scroll-view>
    <NavBar :navigation="this.props.navigation" v-bind:selected="4"/>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
import { Alert } from 'react-native';
export default {
    data() {
        return {
            value: false,
            general: [
                {setting: 'Notifications', value: false, process: this.askNotify},
                {setting: 'Get help', value: true}
            ],
            acessibility: [
                {setting: 'Large font', value: false},
                {setting: 'Narration', value: false},
                {setting: 'Big buttons', value: false}
            ],
            about: {
                "Name" : "Liam Debell",
                "Version" : "1.0.0",
                "License" : "Apache",
                "Source" : "https://github.com/liamdebellada/Natural-History-Museum-vue-native-explorer"
            }
        }
    },
    methods: {
        async changeSetting(val, index, set, func) {
            
            if (func && val) {
                func()
            }
            set[index].value = val
        },
        askNotify() {
            Alert.alert(
                `NHM wants permission to use notifications`,
                "This is not functional (omg)",
                [
                    {text: 'Ok', onPress: () => console.log('Allowed')},
                    {text: "Don't allow", onPress: () => this.general[0].value = false}
                ],
                { cancelable: true }
            )
        }
    },
    components: { NavBar }
}
</script>

<style>
.container {
    background-color: white;
    min-height: 100%;
}
.title-text {
    color: black;
    font-size: 30;
    font-weight: 500;
}
.title-container {
    margin: 20;
}
.sub-text {
    color: black;
    font-weight: 200;
    margin: 10;
}
.general-settings-panel {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10; 
}
.switch {
    margin-left: auto;
}
.setting-label {
    font-size: 15;
}
.about-view {
    flex: 1;
    flex-wrap: wrap;
    flex-direction: row;
}
.about-item {
    height: 50;
    width: auto;
    flex-basis: 50%;
    display: flex;
    justify-content: center;
}
.about-text-key {
    color: #959595;
    font-weight: 600;
}
.about-text-value {
    font-weight: 300;
}
</style>