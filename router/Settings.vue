<template>
    <SafeAreaView class="container">
    <scroll-view>
        <view class="title-container">
            <text class="title-text">Settings</text>
            <!-- <switch v-model="value"/> -->
            <text class="sub-text">Version: 1.0.0 - Liam Debell :)</text>
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
            value: true
        }
    },
    components: { NavBar }
}
</script>

<style>
.container {
    background-color: #1f1f1f;
    min-height: 100%;
}
.title-text {
    color: white;
    font-size: 30;
    font-weight: 500;
}
.title-container {
    margin: 20;
}
.sub-text {
    color: white;
    font-weight: 200;
    margin: 10;
}
</style>