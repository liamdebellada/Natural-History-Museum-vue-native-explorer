<template>
    <SafeAreaView class="container">
        <status-bar
            background-color="white"
            bar-style="dark-content"
        />
        <view class="container-sub">
            <view class="a-header" :style="{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}">
                <text class="a-title">{{data[0]}}</text>
            </view>
            <scroll-view>
                <view class="a-content-container">
                    <text class="a-content">
                        {{data[1]}}
                    </text>
                </view>
            </scroll-view>
        </view>
        <NavBar :navigation="this.props.navigation" v-bind:selected="0"/>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
export default {
    data() {
        return {
            data: this.navigation["state"]["params"]["data"]
        }
    },
    components: {NavBar},
    props: {
        navigation: { type: Object }
    }
}
</script>

<style>
.container {
    min-height: 100%;
}

.container-sub {
    height: 100%;
}

.a-header {
    background-color: rgba(210, 210, 210, 0.194);
    width: 100%;
    height: 90;
    display: flex;
    justify-content: center;
}

.a-title {
    font-size: 30;
    margin-left: 30;
    font-weight: 500;
}

.a-content-container {
    margin-left: 20;
    margin-right: 20;
    margin-top: 10;
    margin-bottom: 75;
}

.a-content {
    font-size: 16;
    font-weight: 300;
}

</style>
