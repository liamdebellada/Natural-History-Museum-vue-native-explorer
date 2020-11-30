<template>
    <SafeAreaView class="container">
    <scroll-view>
        <view class="title-container">
            <text class="title-text">Accessibility Settings</text>
            <text class="title-text" :style="{fontSize: 22, marginTop: 30}">General</text>
            <view>
                <view v-for="(item, index) in general" :key="index" class="general-settings-panel">
                    <text class="setting-label">{{item.setting}}</text>
                    <switch class="switch" :on-value-change="(val) => changeSetting(val, index, general)" :value="item.value"/>
                </view>
            </view>
        </view>
    </scroll-view>
    <NavBar :navigation="this.props.navigation" v-bind:selected="4"/>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
export default {
    data() {
        return {
            value: false,
            general: [
                {setting: 'Notifications', value: false},
                {setting: 'Get help', value: true}
            ]
        }
    },
    methods: {
        async changeSetting(val, index, set) {
            set[index].value = val
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
</style>